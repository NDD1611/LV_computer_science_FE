import axiosNode from "./axiosNode";

export const registerApi = async (data) => {
    try {
        let response = await axiosNode.post("/auth/register", data);
        return response;
    } catch (exception) {
        return {
            err: true,
            exception,
        };
    }
};
export const loginApi = async (data) => {
    try {
        return await axiosNode.post("/auth/login", data);
    } catch (exception) {
        return {
            error: true,
            exception,
        };
    }
};
export const getAllFolder = async (id: string) => {
    try {
        let response = await axiosNode.post("/drive/get-all-folder", {
            userId: id,
        });
        return response;
    } catch (exception) {
        return {
            err: true,
            exception,
        };
    }
};
export const createFolder = async (name: string, parentId: string, userId: string, path: string) => {
    try {
        let response = await axiosNode.post("/drive/create-folder", {
            name,
            parentId,
            userId,
            path,
        });
        return response;
    } catch (exception) {
        return {
            err: true,
            exception,
        };
    }
};
export const saveFile = async (name: string, parentId: string, userId: string, path: string, size: string) => {
    try {
        let response = await axiosNode.post("/drive/save-file", {
            name,
            parentId,
            userId,
            path,
            size
        });
        return response;
    } catch (exception) {
        return {
            err: true,
            exception,
        };
    }
};
export const deleteFolder = async (folderId: string) => {
    try {
        let response = await axiosNode.post("/drive/delete-folder", { folderId });
        return {
            err: false,
            response
        };
    } catch (exception) {
        return {
            err: true,
            exception
        }
    }
};
