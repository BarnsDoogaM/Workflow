export interface comment{
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
};

export interface todo{
    userId: number;
    id: number;
    title: string;
    coompleted: boolean;

}