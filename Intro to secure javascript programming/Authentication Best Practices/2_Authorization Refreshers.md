# Authorization

- Authorization happens when a client tries to access a resource.
- The server ensures the client has the right to access this resource.
- This can be done at different levels:
  - Is the client authenticated?
  - Does the client have sufficient credentials for this resources? Are they an admin?
  - Does the resource contain data the client MUST NOT know about?

# Content-based Access

- In a GDPR/CPA-based world, the content of a resource is very sensitive.
- Some facets of the resource might not be accessible by anyone.
- When fetching a resource, one MUST know if the Personal Identifiable Information of an individual cna be accessed by the client.

- Example: A person delivering parcels should not have direct access to the phone numbers of the customers. This must go through a central service, guaranteeing anonymity of the phone number to both parties.
