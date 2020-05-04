const ROOT_API = "https://www.mocky.io/v2/5eb0053d3300002b00c68ae9";

const subscribe = async type => {
  const response = await fetch(`${ROOT_API}/${type}`);
  if (response.ok) {
    alert(`You have successfully subscribed to ${type}`);
  } else {
    alert(`HTTP-Error:  ${response.status}`);
  }
};
