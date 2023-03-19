import React from 'react';
import ChartRow from './ChartRow';

let tableRowsData = [
    {
        Title: 'Billy Elliot ',
        Length: '123',
        Rating: '5',
        Categories: ['Drama','Comedia'],
        Awards: 2
    }
    
]


function Chart (){
    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        {/* <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nombre</th>
                                <th>Descripción</th>
                                <th>Precio</th>
                                <th>Stock</th>
                            </tr>
                        </thead> */}
                        {/* <tfoot>
                            <tr>
                                <th>Id</th>
                                <th>Nombre</th>
                                <th>Descripción</th>
                                <th>Precio</th>
                                <th>Stock</th>
                            </tr>
                        </tfoot> */}
                        <tbody>
                            <div>
                            {
                             tableRowsData.map( ( row , i) => {
                                return <ChartRow { ...row} key={i}/>
                             })
                            }
                            </div>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Chart;