import Connector from "./connector";

export class Core {
  getStars = async () => {
    const result = {
      value: null,
      error: null,
    };
    try {
      const response = await Connector.connector.get("/api/stars");
      result.value = response.data;
    } catch (e) {
      result.error = e.response;
    }
    return result;
  };
  deleteStar = async (id) => {
    const result = {
      value: null,
      error: null,
    };
    try {
      const response = await Connector.connector.delete(`/api/stars/${id}`);
      result.value = response.data;
    } catch (e) {
      result.error = e.response;
    }
    return result;
  };

  createStar = async (name, galaxy, img, text) => {
    const result = {
      value: null,
      error: null,
    };
    try {
      const response = await Connector.connector.post(`/api/stars/`, {
        name,
        galaxy,
        img,
        text,
      });
      result.value = response.data;
    } catch (e) {
      result.error = e.response;
    }
    return result;
  };

  getStar = async (id) => {
    const result = {
      value: null,
      error: null,
    };
    try {
      const response = await Connector.connector.get(`/api/stars/${id}`);
      result.value = response.data;
    } catch (e) {
      result.error = e.response;
    }
    return result;
  };

  searchStar = async (name) => {
    const result = {
      value: null,
      error: null,
    };
    try {
      const response = await Connector.connector.get(
        `/api/stars/search/${name}`
      );
      result.value = response.data;
    } catch (e) {
      result.error = e.response;
    }
    return result;
  };
}

export default new Core();
