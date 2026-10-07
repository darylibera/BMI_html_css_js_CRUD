const onCalculateBtnClick = () => {
  try {
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    if (!height || !weight || height<=0 || weight<=0) {
      alert("Enter valid height and weight");
      return;
    }

    let obj = { height, weight };
    let jsonObj = JSON.stringify(obj);

    localStorage.setItem("data", jsonObj);

    calculate();
  } catch (error) {
    console.log(error);
    alert("Uable to store");
  }
};

const calculate = () => {
  try {
    let data = localStorage.getItem("data");
    data = JSON.parse(data);

    let heightValue = data.height;
    let weightValue = data.weight;

    heightValue /= 100;
    heightValue **= 2;
    let bmiValue = weightValue / heightValue;
      if (bmiValue < 18.5) {
        document.getElementById("bmiCategory").innerText = "Underweight";
        document.getElementById("bmiStatus").innerText = bmiValue.toFixed(1);
        document.getElementById("bmiCategory").className =
          "badge rounded-pill bg-warning px-3 py-2";
      } else if (bmiValue < 25.0) {
        document.getElementById("bmiCategory").innerText = "Healthy weight";
        document.getElementById("bmiStatus").innerText = bmiValue.toFixed(1);
        document.getElementById("bmiCategory").className =
          "badge rounded-pill bg-success px-3 py-2";
      } else if (bmiValue < 30.0) {
        document.getElementById("bmiCategory").innerText = "Overweight";
        document.getElementById("bmiStatus").innerText = bmiValue.toFixed(1);
        document.getElementById("bmiCategory").className =
          "badge rounded-pill bg-warning px-3 py-2";
      } else {
        document.getElementById("bmiCategory").innerText = "Obesity";
        document.getElementById("bmiStatus").innerText = bmiValue.toFixed(1);
        document.getElementById("bmiCategory").className ="badge rounded-pill bg-danger px-3 py-2";
      }
     
      clearField();

  } catch (error) {
    console.log(error);
  }
};

const clearField = () => {
  try {
    document.getElementById("height").value = "";
    document.getElementById("weight").value = "";
    document.getElementById("calculateBtn").innerText = "CALCULATE BMI";
    document.getElementById("calculateBtn").className ="btn btn-outline-success btn-lg w-100 fw-bold py-3";

  } catch (error) {
    console.log(error);
  }
};

const onDeleteBtnClick = () => {
  try {
    localStorage.removeItem("data");
    alert("Successfully Deleted");
    document.getElementById("bmiCategory").innerText = "Enter your details";
    document.getElementById("bmiStatus").innerText = "---";
    document.getElementById("bmiCategory").className =
      "badge rounded-pill bg-success px-3 py-2";
    clearField();
  } catch (error) {
    console.log(error);
  }
};

const onEditBtnClick = () => {
  try {
    let data = localStorage.getItem("data");
    if (!data) {
      alert("No data available to edit");
      return;
    }
    data = JSON.parse(data);

    document.getElementById("height").value = data.height;
    document.getElementById("weight").value = data.weight;

    document.getElementById("calculateBtn").innerText = "Edit";
    document.getElementById("calculateBtn").className =
      "btn btn-outline-warning  btn-lg w-100 fw-bold py-3";
  } catch (error) {
    console.log(error);
  }
};
