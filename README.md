# Observability Demo

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

