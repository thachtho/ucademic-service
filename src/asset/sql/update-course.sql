UPDATE courses
SET "start" = $1,
    "end" = $2,
    organization_id = $3,
    "name" = $4
WHERE id = $5;