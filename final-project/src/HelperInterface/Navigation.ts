export enum PathNav {
    HOME = '/',
    ALL = '/all',
    ADD = '/add',
    CONTACT = '/constact'
}

export interface navElements {
    path: PathNav,
    name: string
}