import React from 'react';

const NewQuestion = () => {
    return (
        <div>
            <div class="form-group">
                <label for="formGroupExampleInput">Soru gir</label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input"/>
            </div>
            <div>
            <button type="submit" class="btn btn-primary">Kaydet</button>
            </div>
        </div>
    );
};

export default NewQuestion;