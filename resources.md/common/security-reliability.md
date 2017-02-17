# Security and Reliability

---

This section concerns Qoncrete's cloud users, if you're running [Qoncrete privately](/running-on-premises/index.md), feel free to skip this section.

---

## Security

### Transmission
All of our external communication to the Internet uses Symantec's TLS/SSL encyption. Internal communications are also TLS/SSL encypted.


### Application
All of our source code is compiled and encrypted before deployment. Access to databases are locked behind access control systems. The database stores data in ecrypted format and transfers over TLS/SSL connections.


### Hardware
Our physical storage layer has Self-Encrypting Drive (SED) enabled -- that is, all data is also physically encrypted; a circuit built into the disk drive controller chip locally encrypts all data to the drive.


### Data Center and Network
All data is stored in our secure data centers with 24-hour security, biometric access and redundant power. The data centers are certified and compliant with information security management system (ISMS) standard ISO/IEC 27001:2013.


### Real Time Auditing
Our hardware load balancers continuously monitor and audit all access logs for potentional intrusions.


### Vulnerability
Work in progress - third party vulnerability / penetration tests.


## Reliability
All data is replicated at least 3 times across multiple datacenters. 


Be sure to read about [Data Access Tokens](data-access-api-keys.md)
