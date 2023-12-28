import React, { useEffect, useState } from 'react'
import { apiService } from '../service/api-service';

function Blog() {
    const pageLimit = 10;
    const itemsPerPage = 1;
    let currentPage = 0;
    const [list, setList] = useState([]);
    useEffect(() => {
        fetchData(currentPage);
    }, [currentPage]);

    const fetchData = async (page) => {
        try {
            const resData = await apiService.retrieveData('/posts');
            const startIndex = page * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            let users = resData.splice(startIndex, endIndex);
            console.log(users);
            setList(users);
        } catch (error) {
            alert('Error fetching data:', error);
            console.error('Error fetching data:', error);
        }
    };

    function viewMore(item) {
        console.log("View More")
        console.log(item);
    }

    function next() {
        currentPage++;
        fetchData(currentPage);

    }
    function prev() {
        currentPage--;
        fetchData(currentPage);
    }

    const interest = [
        'HEADLINES_NEWS',
        'GENERAL_NEWS',
        'BUSINESS_NEWS',
        'SPORTS_NEWS',
        'ENTERTAINMENT_NEWS',
        'TECHNOLOGY_NEWS',
        'SEARCH_NEW']

    return (
        <main>
            <div id='header' className='flex justify-between'>
                <h1 className='text-2xl font-bold'>Blogs</h1>
                {/* interest */}
                <div className='border-2 px-2 rounded-sm bg-blue-50 flex items-center'>
                    <label for="cars">Interest: </label>

                    <select name="cars" id="cars" className='outline-none bg-transparent'>
                        {interest.map((item,index) => {
                        return <option value={item}>{item}</option>})
                        }
                    </select>
                </div>
                {/* interest */}
            </div>
            <div className='h-fit text-black m-3'>
                {
                    list.map(
                        function (item, index) {
                            return <div id="card" class="w-fit h-fit text-black bg-white my-5 p-3">
                                <span id="card-title" class="uppercase font-bold">ID: {item.id}</span><br />
                                <span id="card-title" class="uppercase font-bold text-center">{item.title}</span>
                                <p id="card-body" class="font-normal text-blue-200">Username: {item.body}</p>
                                <div>
                                    <p id="card-body" class="font-normal text-blue-200">Phone: {item.phone}</p>
                                    <p id="card-body" class="font-normal text-blue-200">Website: <a href={item.website}>{item.website}</a></p>
                                </div>
                                <button className='border-b-2 font-normal text-blue-200 text-end' onClick={() => viewMore(item)}>view more</button>
                            </div>
                        }
                    )}
            </div>
            <ActionButton limit={pageLimit} next={() => next()} prev={() => prev()} />

        </main>
    );
}


function ActionButton({ limit, prev, next }) {
    const elements = [];
    function hhhfhf() {
        for (let i = 0; i < limit; i++) {
            elements.push(
                <div key={i} className='bg-blue-300 rounded-full w-8 h-8 py-1 text-center'>
                    {i + 1}
                </div>
            );
        }
        return <div className='text-blue-500 flex gap-3'>{elements}</div>;
    }
    return (
        <div onClick={prev} className='flex justify-center gap-10 text-white mt-3'>
            <button className='bg-black px-4 py-2 rounded-xl'>Prev</button>
            {hhhfhf()}
            <button onClick={next} className='bg-black px-4 py-2 rounded-xl'>Next</button>
        </div>
    )
}

export default Blog;