# Getting Started

## Prerequisites

* [MarkLogic 9.0-3](http://developer.marklogic.com/products/marklogic-server/9.0)
* [MarkLogic Content Pump](http://developer.marklogic.com/products/mlcp)
* [JDK 1.8](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)

## MarkLogic Developer Tools

[ml-gradle](https://github.com/marklogic-community/ml-gradle) is a community project that makes developing in MarkLogic much easier.  This project uses ml-gradle to install a sample database and application server.  Make sure the JDK 1.8 is in your path before executing the following command and you have MarkLogic 9 installed.  

1. Check the gradle.properties file.  Confirm the host, username, and password reflect your environmnet.  Make sure that the default port is not in conflict with another process.

2. Deploy the configured REST API server and database.   


    gradlew mlDeploy


## Load a single JSON Document

### MarkLogic Content Pump

To load a single JSON document, run the configured script under scripts/importSample.sh.  Open the script and change the parameters to reflect your environment: host, username, password.  Open up QConsole (host:8000/qconsole)
and verify the document exists.

### REST API

You can also load JSON documents via the REST API

[POST /v1/documents](http://docs.marklogic.com/REST/POST/v1/documents)

## Retrieve Document and transform

http://host:port/v1/documents?uri=/sample-1/doc.json&transform=geoJson

Based on following REST endpoint

[GET v1/documents](http://docs.marklogic.com/REST/GET/v1/documents)

