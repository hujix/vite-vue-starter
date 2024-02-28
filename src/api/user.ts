export async function getUserInfo() {
  // return await axios.get(`/user/${userId.name}`);
  return Promise.resolve({
    name: "HuJix",
    count: 666
  });
}
