

import useSWR from 'swr';
import EmpCard from './EmpCard';

const testurl = '';//'https://dummy.restapiexample.com/api/v1/employees';

const fetcher = (url) => fetch(url).then((res) => res.json());
export default function Profile() {
  const { data, error } = useSWR(testurl, fetcher);
  if (error) return <div>failed to load</div>
  //if (!data) return <div>loading...</div>
  const empInfo = data && data.data || [];
  return <div>
    <table>
      <tr>
        <th>Name</th>
        <th>Salary</th>
        <th>Age</th>
      </tr>    
      {
        empInfo.map(emp => (
         <EmpCard key = {emp.id} emp ={emp}/> 
        ))
      }
    </table>
  </div>
}