import shortid from "shortid";

const addId = (data) => data.map((item) => (item.id = shortid()));
export default addId;
