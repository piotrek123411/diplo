-- Таблица ролей --
CREATE TABLE IF NOT EXISTS "roles" (
    "id"                UUID    PRIMARY KEY DEFAULT gen_random_uuid(),
    "name"              VARCHAR(150)     NOT NULL,  
    "createdAt"         TIMESTAMP WITH TIME ZONE    DEFAULT CURRENT_TIMESTAMP,
    "updatedAt"         TIMESTAMP WITH TIME ZONE    DEFAULT CURRENT_TIMESTAMP
);

COMMENT ON TABLE "roles" IS 'Таблица ролей';
COMMENT ON COLUMN "roles"."id" IS 'Идентификатор роли';
COMMENT ON COLUMN "roles"."name" IS 'Название роли';
COMMENT ON COLUMN "roles"."createdAt" IS 'Время создания записи';
COMMENT ON COLUMN "roles"."updatedAt" IS 'Время обновления записи';

INSERT INTO "roles" ("id", "name") VALUES ('user');
INSERT INTO "roles" ("id", "name") VALUES ('admin');

-- Таблица пользователей --
CREATE TABLE IF NOT EXISTS "users" (
    "id"                UUID    PRIMARY KEY     DEFAULT gen_random_uuid (),
    "login"             VARCHAR(24)     NOT NULL,  
    "password"          VARCHAR(150)     NOT NULL,
    "role_id"           UUID    REFERENCES "roles"("id"),
    "createdAt"         TIMESTAMP WITH TIME ZONE    DEFAULT CURRENT_TIMESTAMP,
    "updatedAt"         TIMESTAMP WITH TIME ZONE    DEFAULT CURRENT_TIMESTAMP
);

COMMENT ON TABLE "users" IS 'Таблица пользователей';
COMMENT ON COLUMN "users"."id" IS 'Идентификатор пользователя';
COMMENT ON COLUMN "users"."login" IS 'Логин пользователя';
COMMENT ON COLUMN "users"."password" IS 'Пароль пользователя';
COMMENT ON COLUMN "users"."role_id" IS 'Идентификатор роли пользователя';
COMMENT ON COLUMN "users"."createdAt" IS 'Время создания записи';
COMMENT ON COLUMN "users"."updatedAt" IS 'Время обновления записи';