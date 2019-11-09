import * as mongoose from "mongoose";
import { Tasks } from "./tasks";

export enum ScheduleStates {
    "READY" = "READY",
    "PROCESSING" = "PROCESSING",
    "DONE" = "DONE",
    "STOP" = "STOP",
}

export type Schedules = {
    taskId: string | Tasks;
    owner: string;
    estimatedHour: number;
    processTimeSec: number;
    scheduleDate: Date;
    review: string;
    createdAt: Date;
    state: string;
};

export type ScheduleDocument = mongoose.Document & Schedules;

const schema = new mongoose.Schema(
    {
        taskId: { type: mongoose.Schema.Types.ObjectId, ref: "Tasks" },
        owner: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
        estimatedHour: { type: Number, min: 1, max: 12 },
        processTimeSec: { type: Number, default: 0 },
        scheduleDate: { type: Date },
        review: { type: String },
        state: {
            type: String,
            enum: [ScheduleStates.READY, ScheduleStates.DONE, ScheduleStates.PROCESSING, ScheduleStates.STOP],
            default: ScheduleStates.READY,
        },
    },
    {
        timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
    },
);

export default mongoose.model("Schedules", schema);
