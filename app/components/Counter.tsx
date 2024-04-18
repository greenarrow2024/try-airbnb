"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

export function Counter({name} : {name: string}) {
    const [count, setCount] = useState(0);

    function increase() {
        setCount(count + 1);
    }

    function decrease() {
        if (count > 0) {
            setCount(count - 1);
        }
    }
    return (
        <div className="flex items-center gap-x-4">
            <Input type="hidden" name={name} value={count} />
            <Button variant="outline" size="icon" type="button" onClick={decrease}>
                <Minus className="h-4 w-4 text-primary" />
            </Button>
            <p className="font-medium text-lg">{count}</p>
            <Button variant="outline" size="icon" type="button" onClick={increase}>
                <Plus className="h-4 w-4 text-primary" />
            </Button>
        </div>
    );
}