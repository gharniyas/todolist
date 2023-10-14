const apiRequest = async (url = "", optionsobj = null, errmsg = null) => {
  try {
    const response = await fetch(url, optionsobj);
    if (!response.ok) throw Error("please reload the page");
  } catch (err) {
    errmsg = err.message;
  } finally {
    return errmsg;
  }
};
export default apiRequest;
