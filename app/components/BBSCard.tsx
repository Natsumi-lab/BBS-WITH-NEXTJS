import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import React from "react";

const BBSCard = () => {
    return (
      <Card>
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>
          Enjoy your new project in one-click.
        </CardDescription>
      </CardHeader>
      <CardContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link href={"/bbs-posts/1"} className="text-blue-500">
        Read more
        </Link>
      </CardFooter>
      </Card>
    );
}

export default BBSCard