"use client";

import { uploadSchema } from "@/app/lib/zodSchema";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

const UploadContentForm = () => {
  const [uploadStatus, setUploadStatus] = useState("Upload");
  const [uploadError, setUploadError] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  const form = useForm({
    resolver: zodResolver(uploadSchema),
  });

  const uploadFile = async (file, data) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("type", data.type);
    formData.append("state", data.state);

    const response = await axios.post(
      "api/uploadContent",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response;
  };

  const SubmitHandler = async (data) => {
    console.log("upload started...");

    const files = data.fileContent;

    setIsUploading(true);

    console.log(data);
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      try {
        setUploadStatus(`Uploading file ${i + 1}/${files.length}`);
        const response = await uploadFile(file, data);
        console.log(response);
        console.log("File uploaded:", file.name);

        await delay(1000);
        setUploadError("");
      } catch (error) {
        console.error("Error uploading file:", file.name, error.response.data);
        setUploadError(
          `${file.name} failed to upload - ${error.response.data}`
        );
        // await delay(5000);
        // setUploadError("");
      }
    }

    await delay(2000);

    setUploadStatus(() => {
      if (uploadError) {
        return "All uploads completed";
      } else {
        return "Upload";
      }
    });
    await delay(5000);
    setIsUploading(false);
    setUploadStatus("Upload");
  };

  return (
    <div>
      <div className="my-8">
        <p className="w-full text-center text-red-500">
          {uploadError ? uploadError : ""}
        </p>
      </div>
      <Form {...form}>
        <form
          className="py-8 px-3 border rounded-md"
          onSubmit={form.handleSubmit(SubmitHandler)}
        >
          <div className=""></div>

          <div className="my-3">
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Souvenirs">Souvenirs</SelectItem>
                      <SelectItem value="Property">Property</SelectItem>
                      <SelectItem value="Electrical works">
                        Electrical works
                      </SelectItem>
                      <SelectItem value="Building and construction">
                        Building and construction
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* <p>{form.formState.errors.type.message}</p> */}
          </div>
          <div className="my-3">
            <FormField
              control={form.control}
              name="state"
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="State" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Sold">Sold</SelectItem>
                      <SelectItem value="Available">Available</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* <p>{form.formState.errors.state.message}</p> */}
          </div>
          <div className="my-3">
            <FormField
              control={form.control}
              name="fileContent"
              render={({ field: { value, onChange, ...field } }) => (
                <FormItem>
                  <Input
                    {...field}
                    onChange={(e) => {
                      onChange(Array.from(e.target.files));
                    }}
                    id="fileContent"
                    type="file"
                    className="w-full"
                    multiple
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="my-8">
            <Button
              type="submit"
              className="w-full py-2 px-4 bg-stone-950 rounded-md text-white"
            >
              {uploadStatus}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default UploadContentForm;
