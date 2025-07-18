export function createevents(){
    containerEvents.innerHTML=`<div class="containerFormEvents">
                <form class="formEvents">
                    <h2>Create Event</h2>
                    <div class="mb-3">
                        <label for="nameEvent" class="form-label">Name</label>
                        <input type="text" class="form-control" id="nameEvent" aria-describedby="emailHelp">
                    </div>
                    <div class="mb-3">
                        <label for="descriptionEvent" class="form-label">description</label>
                        <textarea class="form-control" id="descriptionEvent" rows="3"></textarea>
                    </div>
                    <div class="mb-3">
                        <label for="dateEvent" class="form-label">Name</label>
                        <input type="date" class="form-control" id="dateEvent" aria-describedby="emailHelp">
                    </div>
                    <div class="mb-3">
                        <label for="capacityEvent" class="form-label">Name</label>
                        <input type="number" class="form-control" id="capacityEvent" aria-describedby="emailHelp">
                    </div>
                    <div class="divBtnEvents">
                        <button class="btn btn-danger">cancel</button>
                        <button type="submit" class="btn btn-primary">Save Event</button>
                    </div>
                </form>
            </div>`
}