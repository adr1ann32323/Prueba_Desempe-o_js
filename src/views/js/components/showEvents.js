export function showEvents(){
    containerEvents.innerHTML= `<div>
            <div class="divBtnEvents">
                <button type="button" class="btn btn-primary">Create Events</button>
            </div>
         </div>
         <table class="table">
            <thead>
            <tr>
            <th scope="col">image</th>
            <th scope="col">name</th>
            <th scope="col">Descripcion</th>
            <th scope="col">capacity</th>
            <th scope="col">date</th>
            <th scope="col">Actions</th>
            
        </thead>
        <tbody>
            <tr>
                <th scope="row"><img src="../../assets/noteimg.png" alt="" width="80"></th>
                <td>name</td>
                <td>lorem sfsfesfes</td>
                <td>10</td>
                <td>10-15-2025</td>
                <td>
                   <button type="button" class="btn btn-warning">Logout</button>
                   <button type="button" class="btn btn-danger">Logout</button>
                </td>

            </tr>
            <tr>
                <th scope="row"><img src="../../assets/noteimg.png" alt="" width="80"></th>
                <td>name</td>
                <td>lorem sfsfesfes</td>
                <td>10</td>
                <td>10-15-2025</td>
                <td>
                   <button type="button" class="btn btn-warning">Logout</button>
                   <button type="button" class="btn btn-danger">Logout</button>
                </td>

            </tr>
            
        
            
        </tbody>
        </table>   `
}