# Project overview

## What is "Friction" in Data?
Data is often hard to find, archived in difficult to use formats, poorly structured and/or incomplete. These issues create friction and make it difficult to use, publish and share data. The friction we seek to remove---in getting, sharing, and validating data---stop people from truly benefiting from the wealth of data being opened up every day. 

## Open source software and specifications
At its core, [Frictionless Data](https://frictionlessdata.io/) is a set of [specifications](https://frictionlessdata.io/specs/) for data and metadata interoperability, accompanied by a collection of [software libraries](https://frictionlessdata.io/software/) that implement these specifications, and a range of best practices for data management. The central specification, the Data Package, is a simple and practical “container” for data and metadata.

All our code is open source and made available at [GitHub](https://github.com/frictionlessdata) under the CC-by license. Code and documentation contributions and adoptions are highly encouraged.

## Data Preparation and Validation
Frictionless Data is mainly focused on the data preparation and validation stages, and the team has created specifications and tooling centered around these steps. For instance, the [Data Package Creator](http://create.frictionlessdata.io/) packages tabular data with its machine readable metadata, allowing users to understand the data structure, meaning of values, how the data was created, and the license. Also, users can validate their data for structure and content with [Goodtables](http://try.goodtables.io/), which reduces errors and increases data quality. By creating specifications and tooling and promoting best practices, we are aiming to make data more open and more easily shareable among people and between various tools.

## Packaged Data
We provide a simple wrapper and basic structure for transportation of data that significantly reduces the friction in data sharing and integration, supports automation and does this without imposing major changes on the underlying data being packaged. We focus on tabular data but any kind of data can be "packaged". Its lightweight and simple nature it is easy to adopt both for data publishers, data users and data tool makers.

## Design Principles
The specifications and software are primarily informed by reuse (of existing formats and standards), conceptual minimalism, and platform-agnostic interoperability.

1. Focused: Focus on one part of the data chain, one specific feature (e.g. packaging), and a few specific types of data (e.g. tabular).

2. Web-oriented: Build for the web using formats that work naturally with HTTP such as JSON, a common data exchange format for web APIs, and CSV, which is easily streamable.

3. Distributed: Design for a distributed ecosystem with no centralized, single point of failure or dependence.

4. Open: Make things that anyone can freely and openly use and reuse with a community that is open to everyone.

5. Built Around Existing Software: Integrate with existing software while also designing for direct use---for example, when a Tabular Data Package integration is unavailable, fall back to CSV.

6. Simple: Keep the formats and metadata simple and lightweight, and make things easy to learn and use by doing the least required.