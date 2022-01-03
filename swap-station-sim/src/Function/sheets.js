import axios from "axios";

const bulkDelete = async (str = "", url) => {
  try {
    let res = await axios({
      method: "delete",
      url: `${url}/${str}/*`,
    });
    return { status: true, meta: res.data };
  } catch (e) {
    return { status: false, meta: e };
  }
};

const bulkAdd = async (url, data) => {
  try {
    let res = await axios({
      method: "post",
      url: url,
      data: data,
    });
    return { status: true, meta: res.data };
  } catch (e) {
    return { status: false, meta: e };
  }
};

const getAllRows = async (url) => {
  try {
    let res = await axios({
      method: "get",
      url: url,
    });
    return { status: true, meta: res.data };
  } catch (e) {
    return { status: false, meta: e };
  }
};

export { bulkDelete, bulkAdd, getAllRows };
