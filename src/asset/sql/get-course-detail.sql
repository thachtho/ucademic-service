select id,
    start,
    "end",
    organization_id as organizationId,
    name
from courses c
where id = $1