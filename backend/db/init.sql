CREATE TABLE IF NOT EXISTS public.post
(
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    title text,
    description text,
    author text,
    created timestamp DEFAULT now(),
    content_id uuid,
    CONSTRAINT post_pkey PRIMARY KEY (id),
    CONSTRAINT post_content_id FOREIGN KEY (content_id)
        REFERENCES public.post_content (id)
        ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS public.post_content
(
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    content text,
    CONSTRAINT post_content_pkey PRIMARY KEY (id)
);