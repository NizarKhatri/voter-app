'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Button } from '../ui/button';
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

export default function Component() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current ?? null,
  });
  return (
    <>
      <div ref={componentRef}>
        <Card>
          <CardHeader>
            <CardTitle className="text-md">MCKJ ELECTION 2024-2027</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 text-xs">
              <table className="w-full table-auto">
                <tbody>
                  <tr>
                    <td style={{ width: '90px' }}>
                      <Label htmlFor="name">Booth #</Label>
                    </td>
                    <td>
                      <span className="ml-6">Test</span>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ width: '90px' }}>
                      <Label htmlFor="name">Page #</Label>
                    </td>
                    <td>
                      <span className="ml-6">Test</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Label htmlFor="name">Serial #</Label>
                    </td>
                    <td>
                      <span className="ml-6">Test</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Label htmlFor="name">Family Card #</Label>
                    </td>
                    <td>
                      <span className="ml-6">Test</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Label htmlFor="description">Voter Id</Label>
                    </td>
                    <td>
                      <span className="ml-6">Test</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Label htmlFor="name">Member Id</Label>
                    </td>
                    <td>
                      <span className="ml-6">Test</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Label htmlFor="description">Name</Label>
                    </td>
                    <td>
                      <span className="ml-6">Test</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Label htmlFor="description">Father Name</Label>
                    </td>
                    <td>
                      <span className="ml-6">Test</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Label htmlFor="description">Orakh</Label>
                    </td>
                    <td>
                      <span className="ml-6">Test</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-end">
        <Button onClick={handlePrint}>Save</Button>
      </div>
    </>
  );
}
