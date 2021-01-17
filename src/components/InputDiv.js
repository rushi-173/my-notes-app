import './InputDiv.css';

export default function InputDiv() {
  return (
    <div className="input-div">
        <h3>Create A Note</h3>
        <form>
            <label>Note Title :</label>
            <input type="text"></input>
            <label>Note :</label>
            <textarea></textarea>
            <button>Add Note+</button>
        </form>      
    </div>
  );
}
