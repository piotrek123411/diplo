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

INSERT INTO "roles" ("name") VALUES ('user');
INSERT INTO "roles" ("name") VALUES ('admin');

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

-- Таблица заданий --
CREATE TABLE IF NOT EXISTS "tasks" (
    "id"                UUID    PRIMARY KEY     DEFAULT gen_random_uuid (),
    "value"             VARCHAR(999)     DEFAULT 'Условие отсутствует',  
    "createdAt"         TIMESTAMP WITH TIME ZONE    DEFAULT CURRENT_TIMESTAMP,
    "updatedAt"         TIMESTAMP WITH TIME ZONE    DEFAULT CURRENT_TIMESTAMP
);
COMMENT ON TABLE "tasks" IS 'Таблица пользователей';
COMMENT ON COLUMN "tasks"."id" IS 'Идентификатор задачи';
COMMENT ON COLUMN "tasks"."value" IS 'Текст задания';
COMMENT ON COLUMN "tasks"."createdAt" IS 'Время создания записи';
COMMENT ON COLUMN "tasks"."updatedAt" IS 'Время обновления записи';

-- Таблица ответа --
CREATE TABLE IF NOT EXISTS "answers" (
    "id"                UUID    PRIMARY KEY     DEFAULT gen_random_uuid (),
    "value"             VARCHAR(999)     DEFAULT 'Ответ отсутствует',  
    "task_id"           UUID    REFERENCES "tasks"("id"),
    "user_id"           UUID    REFERENCES "users"("id"),
    "mark"              VARCHAR(11) DEFAULT 'Не оценено.',
    "createdAt"         TIMESTAMP WITH TIME ZONE    DEFAULT CURRENT_TIMESTAMP,
    "updatedAt"         TIMESTAMP WITH TIME ZONE    DEFAULT CURRENT_TIMESTAMP
);
COMMENT ON TABLE "answers" IS 'Таблица пользователей';
COMMENT ON COLUMN "answers"."id" IS 'Идентификатор задачи';
COMMENT ON COLUMN "answers"."value" IS 'Ответ на задания';
COMMENT ON COLUMN "answers"."task_id" IS 'Ссылка на задачу';
COMMENT ON COLUMN "answers"."user_id" IS 'Ссылка на пользователя';
COMMENT ON COLUMN "answers"."createdAt" IS 'Время создания записи';
COMMENT ON COLUMN "answers"."updatedAt" IS 'Время обновления записи';