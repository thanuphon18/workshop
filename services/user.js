import { api } from "@/libs/api";

export const login = async (params) => {
  const response = await api({
    url: "/login",
    method: "post",
    data: {
      ...params,
    },
  });
  if (response?.data?.error) {
    throw new Error(response?.data?.error);
  }

  return response;
};

export const create = async (params) => {
  const response = await api({
    url: "/user",
    method: "post",
    data: {
      ...params,
    },
  });

  if (response?.data?.error) {
    throw new Error(response?.data?.error);
  }

  return response;
};

export const update = async (id, params) => {
  const response = await api({
    url: `/user/${id}`,
    method: "put",
    data: {
      ...params,
    },
  });
  if (response?.data?.error) {
    throw new Error(response?.data?.error);
  }

  return response;
};

export const listUser = async (params) => {
  const response = await api({
    url: "/user",
    method: "get",
    params: {
      ...params,
    },
  });
  if (response?.data?.error) {
    throw new Error(response?.data?.error);
  }

  return response;
};

export const remove = async (id) => {
  const response = await api({
    url: `/user/${id}`,
    method: "delete",
  });
  if (response?.data?.error) {
    throw new Error(response?.data?.error);
  }

  return response;
};

export const getByPassword = async (password) => {
  const response = await api({
    url: `/user/password/${password}`,
    method: "get",
  });
  if (response?.data?.error) {
    throw new Error(response?.data?.error);
  }

  return response;
};
