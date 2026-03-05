import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const baseUrl = request.nextUrl.origin;
  const spec = {
    openapi: "3.0.3",
    info: {
      title: "Hanina Assignment Log Book API",
      version: "1.0.0",
      description: "REST API to manage assignments",
    },
    servers: [{ url: baseUrl }],
    paths: {
      "/api/assignments": {
        get: {
          summary: "Get list of all assignments",
          responses: { "200": { description: "List of assignments" } },
        },
        post: {
          summary: "Create a new assignment",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  required: ["title", "dueDate"],
                  properties: {
                    title: { type: "string", example: "Lab 3 - Testing" },
                    description: { type: "string", example: "Test all endpoints" },
                    dueDate: { type: "string", format: "date", example: "2025-03-20" },
                    status: { type: "string", enum: ["on process", "complete", "submitted"], example: "on process" },
                  },
                },
              },
            },
          },
          responses: {
            "201": { description: "Assignment created" },
            "400": { description: "Missing required field or invalid status" },
          },
        },
      },
      "/api/assignments/{id}": {
        get: {
          summary: "Get detail of one assignment",
          parameters: [{ name: "id", in: "path", required: true, schema: { type: "integer" } }],
          responses: {
            "200": { description: "Assignment detail" },
            "404": { description: "Not found" },
          },
        },
        put: {
          summary: "Update an assignment",
          parameters: [{ name: "id", in: "path", required: true, schema: { type: "integer" } }],
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    title: { type: "string" },
                    description: { type: "string" },
                    dueDate: { type: "string", format: "date", example: "2025-03-20" },
                    status: { type: "string", enum: ["on process", "complete", "submitted"] },
                  },
                },
              },
            },
          },
          responses: {
            "200": { description: "Updated assignment" },
            "400": { description: "Invalid status" },
            "404": { description: "Not found" },
          },
        },
        delete: {
          summary: "Delete an assignment",
          parameters: [{ name: "id", in: "path", required: true, schema: { type: "integer" } }],
          responses: {
            "200": { description: "Deleted successfully" },
            "404": { description: "Not found" },
          },
        },
      },
    },
  };
  return Response.json(spec);
}
