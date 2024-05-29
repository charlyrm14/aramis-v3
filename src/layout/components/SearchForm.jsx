import {useState} from 'react'

export default function SearchForm () {

    const [search, setSearch] = useState('')
    const [category, setCategory] = useState('1')

    return (
        <div className="card rounded-0 shadow-none border-0 bgi-no-repeat bgi-position-x-end bgi-size-cover" style={{ backgroundColor: "#383133", backgroundSize: "auto 100%", backgroundImage: `url('../public/media/misc/taieri.svg')`}}>
            {/** begin::body*/}
            <div className="card-body container-xxl pt-10 pb-8">
                {/** begin::Title*/}
                <div className="d-flex align-items-center">
                    <h1 className="fw-semibold me-3 text-white">Buscar</h1>
                </div>
                {/** end::Title*/}
                {/** begin::Wrapper*/}
                <div className="d-flex flex-column">
                    {/** begin::Block*/}
                    <div className="d-lg-flex align-lg-items-center">
                        {/** begin::Simple form*/}
                        <div className="rounded d-flex flex-column flex-lg-row align-items-lg-center bg-body p-5 w-xxl-850px h-lg-60px me-lg-10 my-5">
                            {/** begin::Row*/}
                            <div className="row flex-grow-1 mb-5 mb-lg-0">
                                {/** begin::Col*/}
                                <div className="col-lg-6 d-flex align-items-center mb-3 mb-lg-0">
                                    <i className="ki-outline ki-magnifier fs-1 text-gray-500 me-1"></i>
                                    {/** begin::Input*/}
                                    <input
                                        type='text'
                                        className='form-control form-control-flush flex-grow-1'
                                        name='search'
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                        placeholder='Ejemplo: Juan Perez'/>
                                    {/** end::Input*/}
                                </div>
                                {/** end::Col*/}
                                {/** begin::Col*/}
                                <div className="col-lg-6 d-flex align-items-center mb-5 mb-lg-0">
                                    {/** begin::Desktop separartor*/}
                                    <div className="bullet bg-secondary d-none d-lg-block h-30px w-2px me-5"></div>
                                    {/** end::Desktop separartor*/}
                                    <i className="ki-outline ki-element-11 fs-1 text-gray-500 me-1"></i>
                                    {/** begin::Select*/}
                                    <select
                                        className='form-select border-0 flex-grow-1'
                                        data-control='select2'
                                        data-placeholder='Category'
                                        data-hide-search='true'
                                        defaultValue={category}
                                        onChange={(e) => setCategory(e.target.value)}>
                                        <option value='1'>Nombre</option>
                                        <option value='2'>RFC</option>
                                        <option value='3'>Póliza aseguradora</option>
                                    </select>
                                    {/** end::Select*/}
                                </div>
                                {/** end::Col*/}
                            </div>
                            {/** end::Row*/}
                            {/** begin::Action*/}
                            <div className="min-w-150px text-end">
                                <button type="submit" className="btn btn-dark" id="kt_advanced_search_button_1">Buscar</button>
                            </div>
                            {/** end::Action*/}
                        </div>
                        {/** end::Simple form*/}
                    </div>
                    {/** end::Block*/}
                </div>
                {/** end::Wrapper*/}
            </div>
            {/** end::body*/}
        </div>
    )
}