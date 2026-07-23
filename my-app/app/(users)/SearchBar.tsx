"use client"
import { Search, X } from "lucide-react";
import { useState } from "react";
import "../globals.css"

interface SearchBarProps {
    setHide: (value: boolean) => void;
    hide: boolean;
    windowWidth: number;
}



export function SearchBar(prop: SearchBarProps) {
    const [value, setValue] = useState<string>("");
    


    if (prop.windowWidth <= 431) {
        return (
            <>
                {!prop.hide && (
                    <div className="SearchBarMobile" onClick={() => prop.setHide(true)}>
                        <Search size={18} />
                    </div>
                )}

                {  prop.hide  && (
                    <div className="flex items-center justify-between w-full mt-2">
                        <input
                            type="text"
                            id="fullSearchWidth"
                            placeholder="Search..."
                            className="InputField border-2 rounded-full p-2 mr-2 bg-white"
                            value={value}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                setValue(e.target.value)
                            }
                        />
                        <div
                            className="size-8 flex justify-center items-center text-themeIcon rounded-full"
                            onClick={() => {
                                prop.setHide(false);
                                setValue("");
                            }}
                        >
                            <X size={18} />
                        </div>
                    </div>
                )}
            </>
        );
    }

    return <SearchBarDesktop value={value} setValue={setValue} />;
}



function SearchBarDesktop(prop: { value: string; setValue: (value: string) => void; }) {
    return (
        <>
            <label className="SearchBar">
                <input
                    type="text"
                    className="InputField"
                    id="searchbar"
                    placeholder="Search..."
                    value={prop.value}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        prop.setValue(e.target.value)
                    }
                />

                {prop.value ? (
                    <div className="SearchIcons" onClick={() => prop.setValue("")}>
                        <X size={18} />
                    </div>
                ) : (
                    <div className="SearchIcons">
                        <Search size={18} />
                    </div>
                )}
            </label>
        </>
    );
}