import BackButton from "./BackButton";

const MoveZeroToEnd = () => {	
	
	const ZeroToEnd = () =>{
		const arr = [0, 5, 0, 2, 8, 0, 3, 1, 0];
		let index = 0;
		for(let i = 0; i< arr.length; i++){
			if(arr[i] !== 0){
				arr[index] = arr[i];
				index++;
			}
			
		}
		
		while(index < arr.length){
			arr[index] = 0;
			index++;
			console.log(index,arr.length)
		}
		return arr;
	}
		
	 return (
        <div>
            <h3>Move Zero To End</h3>

            <p>
                Result: {ZeroToEnd().join(", ")}
            </p>
        </div>
    );
};

export default MoveZeroToEnd;