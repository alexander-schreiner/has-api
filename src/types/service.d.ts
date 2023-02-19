import type { Key } from "react";

export type Service = {
    name: string,
    has_api: boolean,
    link: null | string,
    topics: Array<string>
};

export type Element = {
    type: string,
    key: Key|null
};
