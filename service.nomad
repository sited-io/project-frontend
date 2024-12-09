job "project-frontend" {
  datacenters = ["dc1"]
  type        = "service"

  group "project-frontend" {
    count = 1

    network {
      mode = "bridge"

      port "http" {}
    }

    service {
      name = "project-frontend"
      port = "http"

      connect {
        sidecar_service {}
      }

      check {
        type     = "http"
        port     = "http"
        path     = "/"
        interval = "20s"
        timeout  = "2s"
      }
    }

    task "project-frontend" {
      driver = "docker"

      resources {
        cpu        = 100
        memory     = 256
        memory_max = 256
      }

      vault {
        policies = ["service-project-frontend"]
      }

      template {
        destination = "${NOMAD_SECRETS_DIR}/.env"
        env = true
        change_mode = "restart"
        data = <<EOF
PORT={{ env "NOMAD_PORT_http" }}
EOF
      }

      config {
        image = "__IMAGE__"
        force_pull = true
      }
    }
  }
}
