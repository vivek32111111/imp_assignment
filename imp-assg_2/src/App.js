import React, { useState ,useEffect} from 'react'



const App = () => {

  const [width, setWidth] = useState(null);
  const image = React.createRef();

  useEffect(() => {
    
    setWidth(image.current.clientWidth);
  }, [])
  const handleClick = () => {

    // Fetching current height and width
 
    width > 600 ? alert("Please Crop Image") : width < 600 ? alert("Please upload another") : alert("Image is of correct width")

  }
  return (
    <div>
      <h3>Image-check</h3>
     
      <img ref={image} src=
        'https://media.geeksforgeeks.org/wp-content/uploads/20200819170816/colorfulbulmaheroelements-300x154.png' alt='gfg' />
      <div>
        <button onClick={handleClick}>
          Submit
        </button>
      </div>
    </div>
  )
}





// class App extends Component {
//   constructor(props) {
//     super(props)

//     // Initialize count state 
//     this.state = { height: null, width: null, isIncrease: false }

//     // Bind context of 'this'
//     this.handleClick = this.handleClick.bind(this)

//     // Create reference of DOM object
//     this.imgRef = React.createRef()
//   }

//   handleClick() {

//     // Fetching current height and width
//     const height = this.imgRef.current.clientHeight
//     const width = this.imgRef.current.clientWidth
//     alert(`
//       Height : ${height}
//       Width : ${width}
//     `)
//   }

//   render() {
//     return (
//       <div>
//         <h3>GeeksforGeeks</h3>
//         {/* Assign reference to DOM element     */}
//         <img ref={this.imgRef} src=
//           'https://media.geeksforgeeks.org/wp-content/uploads/20200819170816/colorfulbulmaheroelements-300x154.png' alt='gfg' />
//         <div>
//           <button onClick={this.handleClick}>
//             Fetch dimension
//           </button>
//         </div>
//       </div>
//     )
//   }
// }
export default App