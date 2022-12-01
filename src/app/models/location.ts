export interface Location {
    name : string;
    children?: Location[];
    isCity?: boolean;
    isOpen: boolean;
}
//may change so that name is an class that holds a name and different information that a place may hold

