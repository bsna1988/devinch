create table Post (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title text not null,
    description text,
    author text
)