# Observability Demo


## Usage

Clone the repo:
```
git clone https://github.com/tkav/observability-demo
cd observability-demo
```

Run using docker-compose:
```
docker-compose up -d
```

This will start the following services:

| Service       | URL                           |
|---------------|-----------------------        |
| Grafana       | http://localhost:3000         |
| Prometheus    | http://localhost:9090         |
| node-exporter | http://localhost:9100/metrics |


Log into [Grafana](http://localhost:3000) with `admin/admin`. Set a new password or click `Skip`.

Grafana is auto-provisioned with a Prometheus datasource (`provisioning/datasources/prometheus.yml`) and dashboard (`provisioning/dashboards/prometheus_monitoring.json`).

If you make changes to `prometheus.yml`, or want to rebuild Grafana with new provisions, run:
```
docker-compose up -d --build --force-recreate
```


## Manual setup


Run Node Exporter
```
docker run -p 9100:9100 prom/node-exporter
```

Build Custom Prometheus image with baked in config
```
docker build -t my-prometheus .
```

Run Prometheus
```
docker run -p 9090:9090 my-prometheus
```

Run Grafana with community plugins
```
docker run -d \
  -p 3000:3000 \
  --name=grafana \
  -e "GF_INSTALL_PLUGINS=grafana-clock-panel,grafana-simple-json-datasource" \
  grafana/grafana-enterprise
```
(Default admin user credentials are admin/admin.)

