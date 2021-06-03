import React from 'react'
import MaterialTable from 'material-table'

export const Table=() => {
    const data=[
        {name:'Subash',age:12}
    ]
    const columns=[
        {
            title:'Name', field:'name'
        },
        {
            title:'Student Id', field:'name'
        },
        {
            title:'Standard', field:'name'
        },
        {
            title:'Address', field:'name'
        },
        {
            title:'Date of Birth', field:'name'
        },
        {
            title:'Sport Activity', field:'name'
        }
    ]
    return (<div>
        <MaterialTable title="Material Table"
        data={data}
        columns={columns}
        options={{
            search:false,
            pagging:false,
            filtering:true
        }}
        />
    </div>

    )
}