'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Button } from '../ui/button';
import { useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import { Input } from '../ui/input';
import { Member } from '@/models/user';
import { fetchUserByCardId, UpdateUserByCardId } from '@/api/user.service';

export default function Component() {
  const [member, setMember] = useState<Member>();
  const [memberId, setMemberId] = useState<number>(0);
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current ?? null,
    onBeforeGetContent: async () => {
      await UpdateUserByCardId(memberId); // Update user before printing
    },
  });

  const fetchMemberData = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && memberId > 0) {
      fetchUserByCardId(memberId).then((data) => {
        if (data !== null) {
          console.log(data);
          setMember(data);
        }
      });
    }
  };
  return (
    <>
      <div className="grid gap-3 text-xs">
        <Input
          id="name"
          type="text"
          className="w-1/3 rounded-lg"
          defaultValue=""
          placeholder="Enter member id"
          onChange={(e) => setMemberId(+e.target.value)}
          onKeyUp={(e) => fetchMemberData(e)}
        />
        <div ref={componentRef}>
          <Card>
            <CardHeader>
              <CardTitle className="text-md">MCKJ ELECTION 2024-2027</CardTitle>
            </CardHeader>
            <CardContent>
              {member !== null && (
                <div>
                  <table className="w-full table-auto">
                    <tbody>
                      <tr>
                        <td style={{ width: '90px' }}>
                          <Label htmlFor="name">Booth #</Label>
                        </td>
                        <td>
                          <span className="ml-6">{member?.boothNo}</span>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ width: '90px' }}>
                          <Label htmlFor="name">Page #</Label>
                        </td>
                        <td>
                          <span className="ml-6">{member?.pageNo}</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Label htmlFor="name">Serial #</Label>
                        </td>
                        <td>
                          <span className="ml-6">{member?.serialNo}</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Label htmlFor="name">Family Card #</Label>
                        </td>
                        <td>
                          <span className="ml-6">{member?.familyCardNo}</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Label htmlFor="description">Voter Id</Label>
                        </td>
                        <td>
                          <span className="ml-6">{member?.voterId}</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Label htmlFor="name">Member Id</Label>
                        </td>
                        <td>
                          <span className="ml-6">{member?.memberId}</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Label htmlFor="description">Name</Label>
                        </td>
                        <td>
                          <span className="ml-6">{member?.name}</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Label htmlFor="description">Father Name</Label>
                        </td>
                        <td>
                          <span className="ml-6">{member?.fatherName}</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Label htmlFor="description">Orakh</Label>
                        </td>
                        <td>
                          <span className="ml-6">{member?.orakh}</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="hidden sm:flex justify-end">
        <Button onClick={handlePrint}>Print</Button>
      </div>
    </>
  );
}
