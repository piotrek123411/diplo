-- Таблица пользователей --
CREATE TABLE IF NOT EXISTS "users" (
    "id"                UUID    PRIMARY KEY     NOT NULL,
    "login"             VARCHAR(24)     NOT NULL,  
    "password"          VARCHAR(150)     NOT NULL,
    "role_id"           VARCHAR(30)    DEFAULT '',
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
