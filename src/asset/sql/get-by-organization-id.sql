select id,
    start,
    "end",
    organization_id as organizationId,
    name
from courses c
where organization_id = $1