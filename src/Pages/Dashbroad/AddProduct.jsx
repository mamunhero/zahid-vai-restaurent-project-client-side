
import Swal from 'sweetalert2';
import Title from '../../Components/Title';
import axios from 'axios';

const AddProduct = () => {

  // from submit
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const receipe = {
      idMeal:form.idMeal?.value || "not-Given",
      strMeal:form.strMeal?.value || "not-Given",
      strMealThumb:form.strMealThumb?.value || "not-Given",
      strArea:form.strArea?.value || "not-Given",
      strCategory:form.strCategory?.value || "not-Given",
      strTheme:form.strTheme?.value || "not-Given",
      strTags:form.strTags?.value || "not-Given",
      strInstructions:form.strInstructions?.value || "not-Given",
      strDrinkAlternative:form.strDrinkAlternative?.value || "not-Given",
      strYoutube:form.strYoutube?.value || "not-Given",
    }
    // console.log(receipe);
    // fetch("http://localhost:5000/receipe", {
    //   method: "POST",
    //   headers:{
    //     'Content-Type': 'application/json',
    //   },
    //   body:JSON.stringify(receipe)
    // })
    // .then(response=> response.json())
    // .then(data=>{
    //   console.log(data);
    //   Swal.fire({
    //     title: "Good job!",
    //     text: "Your recipe has been added!",
    //     icon: "success"
    //   });
    // })
    
    axios.post("http://localhost:5000/receipe", receipe)
    .then(response => {
    console.log(response.data);
    Swal.fire({
      title: "Good job!",
      text: "Your recipe has been added!",
      icon: "success"
    });
  })

  }

  return (
    <div>
      <Title>Add a Product</Title>
      <div className='form'>
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Product Name</span>
          </label>
          <div className='flex flex-wrap gap-5'>
            <input 
              type="text" 
              placeholder="Enter a Product Name" 
              className="input flex-1 input-bordered" 
              name='strMeal'
              required />
            <input 
              type="text" 
              placeholder="Enter a Product Image" 
              className="input flex-1 input-bordered" 
              name='strMealThumb'
              required />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Area</span>
          </label>
          <div className='flex flex-wrap gap-5'>
            <input 
              type="text" 
              placeholder="Enter Area" 
              className="input flex-1 input-bordered" 
              name='strArea'
              required />
            <input 
              type="text" 
              placeholder="Enter a Category" 
              className="input flex-1 input-bordered" 
              name='strCategory'
              required />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Enter Color</span>
          </label>
          <div className='flex flex-wrap gap-5'>
            <input 
              type="color" 
              placeholder="Enter a Product Name" 
              className="input flex-1 input-bordered" 
              name='strTheme'
              required />
            <input 
              type="text" 
              placeholder="Enter some Tags" 
              className="input flex-1 input-bordered" 
              name='strTags'
              required />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Instruction</span>
          </label>
          <textarea 
            className="textarea textarea-ghost" 
            placeholder="Insert Some Information"
            name='strInstructions'></textarea>
        </div>
        <div className="form-control mt-6">
          <input type="submit" className='btn btn-primary' value="Add a Product" />
        </div>
      </form>
      </div>
    </div>
  );
};

export default AddProduct;

