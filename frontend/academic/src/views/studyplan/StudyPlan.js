import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import {
    CButton,
    CModal,
    CModalBody,
    CModalFooter,
    CModalHeader,
    CModalTitle,
} from '@coreui/react'
import axios from "axios";
import StudyPlanList from "./StudyPlanList";

export class StudyPlan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataReady: false,
            query: '',
            coursePlan: [],
            coursePick: [],
            sksCount: 0,
            sksMax: 21,
            modal: false,
        };
    }

    //satu sks: 50 menit
    //dua sks: 100 menit (1 jam 40 menit)
    //tiga sks: 150 menit (2 jam 30 menit)
    //empat sks: 200 menit (3 jam 20 menit)
    componentDidMount() {
        axios
            .get("https://jsonplaceholder.typicode.com/posts?_start=0&_limit=3")
            .then(() => {
                this.setState({
                    coursePlan: [
                        {
                            courseCode: "UNV12004",
                            courseTitle: 'Bahasa Indonesia',
                            courseCredits: 2,
                            courseDepartment: "Teknik Informatika",
                            courseDepartmentID: "002",
                            session: [
                                {
                                    courseID: "sO0UMktbZQWJnIKtMHdiQsiFKT4pl4ar6AFM8K4wUts=",
                                    courseLecture: "Abdul Malik, Asri Lolita",
                                    courseLectureID: 7898777100,
                                    courseRoom: "Ruang 8 FT",
                                    courseRoomID: 1103,
                                    courseSchedule: "Selasa, 13.00-14.40 WIB",
                                    courseScheduleStart: 72,
                                    courseScheduleEnd: 75,
                                    courseCapacity: 45
                                },
                                {
                                    courseID: "dwpU1CWCsGaAD69UeAS@dfrIt61jwMFm1V_sJioiB0o=",
                                    courseLecture: "Abdul Malik, Asri Lolita",
                                    courseLectureID: 7898777100,
                                    courseRoom: "Ruang 6 FT",
                                    courseRoomID: 1101,
                                    courseSchedule: "Rabu, 09.10-10.50 WIB",
                                    courseScheduleStart: 92,
                                    courseScheduleEnd: 95,
                                    courseCapacity: 45
                                },
                                {
                                    courseID: "toyR@V3aCp7ygAWgfl_Ic_@lBaovO@GhmcJWu6fV07U=",
                                    courseLecture: "Abdul Malik, Asri Lolita",
                                    courseLectureID: 7898777100,
                                    courseRoom: "Ruang 6 FT",
                                    courseRoomID: 1101,
                                    courseSchedule: "Rabu, 10.50-12.30 WIB",
                                    courseScheduleStart: 92,
                                    courseScheduleEnd: 95,
                                    courseCapacity: 45
                                },
                                {
                                    courseID: "vX4RF8llJFXbVI9NZJwj1x6jH_KitO5NMgBMBwK88pk=",
                                    courseLecture: "Abdul Malik, Asri Lolita",
                                    courseLectureID: 7898777100,
                                    courseRoom: "Ruang 6 FT",
                                    courseRoomID: 1101,
                                    courseSchedule: "Kamis, 07.30-09.10 WIB",
                                    courseScheduleStart: 92,
                                    courseScheduleEnd: 95,
                                    courseCapacity: 45
                                },
                                {
                                    courseID: "WPwr8LwEnkH43aAVOMxn6Ztk2_h@SbkrUj24mZ3GKks=",
                                    courseLecture: "Abdul Malik, Fabio Testy Ariance Loren",
                                    courseLectureID: 7898777100,
                                    courseRoom: "Ruang 6 FT",
                                    courseRoomID: 1101,
                                    courseSchedule: "Kamis, 09.10-10.50 WIB",
                                    courseScheduleStart: 92,
                                    courseScheduleEnd: 95,
                                    courseCapacity: 45
                                },
                                {
                                    courseID: "SbXeCP22BK1YaycEYkGivjiA5KofZqo6q7l2zLkExLI=",
                                    courseLecture: "Abdul Malik, Fabio Testy Ariance Loren",
                                    courseLectureID: 7898777100,
                                    courseRoom: "Ruang 6 FT",
                                    courseRoomID: 1101,
                                    courseSchedule: "Kamis, 10.50-12.30 WIB",
                                    courseScheduleStart: 92,
                                    courseScheduleEnd: 95,
                                    courseCapacity: 45
                                }
                            ]
                        },
                        {
                            courseCode: "UNV12005",
                            courseTitle: "Bahasa Inggris",
                            courseCredits: 3,
                            courseDepartment: "Teknik Informatika",
                            courseDepartmentID: "002",
                            session: [
                                {
                                    courseID: "bEnlJ1YO8l@tkt0lIK3Evi74QrOu5f3J6XoItbTiocE=",
                                    courseLecture: "Elsa Ernawati Nainggolan",
                                    courseLectureID: 7898777101,
                                    courseRoom: "Ruang 4 FT",
                                    courseRoomID: 1106,
                                    courseSchedule: "Selasa, 07.30-10.00 WIB",
                                    courseScheduleStart: 12,
                                    courseScheduleEnd: 15,
                                    courseCapacity: 45
                                },
                                {
                                    courseID: "nYat2ZJSDzHrjqVuG26yyLno6kzCjmvTONvLoJdaO@c=",
                                    courseLecture: "Elsa Ernawati Nainggolan",
                                    courseLectureID: 7898777102,
                                    courseRoom: "Ruang 1 FT",
                                    courseRoomID: 1102,
                                    courseSchedule: "Selasa, 10.00-12.30 WIB",
                                    courseScheduleStart: 62,
                                    courseScheduleEnd: 65,
                                    courseCapacity: 45
                                },
                                {
                                    courseID: "8gmjRpZ8T7ks00EBZHiTJbxSfBKKEa0fVXrCiOggodM=",
                                    courseLecture: "Elsa Ernawati Nainggolan",
                                    courseLectureID: 7898777102,
                                    courseRoom: "Ruang 4 FT",
                                    courseRoomID: 1102,
                                    courseSchedule: "Rabu, 12.30-15.00 WIB",
                                    courseScheduleStart: 62,
                                    courseScheduleEnd: 65,
                                    courseCapacity: 45
                                },
                                {
                                    courseID: "mTCim4cZZBFtsKG85vOdhY59W0ymKFg066vhixjFCjo=",
                                    courseLecture: "Pradipta Agustina",
                                    courseLectureID: 7898777102,
                                    courseRoom: "Ruang 2 FT",
                                    courseRoomID: 1102,
                                    courseSchedule: "Kamis, 07.30-10.00 WIB",
                                    courseScheduleStart: "62",
                                    courseScheduleEnd: "65",
                                    courseCapacity: "45"
                                },
                                {
                                    courseID: "NaJY1BbHTAIuEAAdGzfk@ezBRQScyUDdtd9yjXoCDvA=",
                                    courseLecture: "Pradipta Agustina",
                                    courseLectureID: 7898777102,
                                    courseRoom: "Ruang 2 FT",
                                    courseRoomID: 1102,
                                    courseSchedule: "Kamis, 15.00-17.30 WIB",
                                    courseScheduleStart: 62,
                                    courseScheduleEnd: 65,
                                    courseCapacity: 45
                                },
                                {
                                    courseID: "FTJJk29lZ_BAHHnXwtSjZB7ij5Cqn5HMfv3d3sqnV2w=",
                                    courseLecture: "Rona Elfiza",
                                    courseLectureID: 7898777102,
                                    courseRoom: "Ruang 2 FT",
                                    courseRoomID: 1102,
                                    courseSchedule: "Kamis, 12.30-15.00 WIB",
                                    courseScheduleStart: 62,
                                    courseScheduleEnd: 65,
                                    courseCapacity: 45
                                }
                            ]
                        },
                        {
                            courseCode: "FST12001",
                            courseTitle: "Pengantar Teknologi Informasi",
                            courseCredits: 3,
                            courseDepartment: "Teknik Informatika",
                            courseDepartmentID: "002",
                            session: [
                                {
                                    courseID: "7maSsChoI08Ejj4zHT3xogiozrJg8zwa6INdW1uAHRI=",
                                    courseLecture: "Nurfalinda, Alena Uperiati",
                                    courseLectureID: 7898777101,
                                    courseRoom: "Ruang 6 FT",
                                    courseRoomID: 1106,
                                    courseSchedule: "Senin, 14.10-16.40 WIB",
                                    courseScheduleStart: 12,
                                    courseScheduleEnd: 15,
                                    courseCapacity: 35
                                },
                                {
                                    courseID: "xIhhBpAtcqifMlUUsSa9xzpMkKGnuv@DI0aAEBwCX7s=",
                                    courseLecture: "Muhamad Radzi Rathomi, Nurfalinda",
                                    courseLectureID: 7898777102,
                                    courseRoom: "Ruang 6 FT",
                                    courseRoomID: 1102,
                                    courseSchedule: "Senin, 11.40-14.10 WIB",
                                    courseScheduleStart: 62,
                                    courseScheduleEnd: 65,
                                    courseCapacity: 35
                                },
                                {
                                    courseID: "KBm6bbqQpiC1BXXiCPsN5fVZzEXirDR14ZXY5c8ZCAw=",
                                    courseLecture: "Nurfalinda, Muhamad Radzi Rathomi",
                                    courseLectureID: 7898777102,
                                    courseRoom: "Lab Informatika 1 FT",
                                    courseRoomID: 1102,
                                    courseSchedule: "Jumat, 09.10-11.40 WIB",
                                    courseScheduleStart: 62,
                                    courseScheduleEnd: 65,
                                    courseCapacity: 35
                                },
                                {
                                    courseID: "dLhIRdNf@nwKg94QTlNfC0UMITP_3mJolo9yY8JAXnE=",
                                    courseLecture: "Eko Prayetno, Holanda Arief Kusuma, Septia Refly",
                                    courseLectureID: 7898777102,
                                    courseRoom: "Ruang 3 FT",
                                    courseRoomID: 1102,
                                    courseSchedule: "Selasa, 07.30-10.00 WIB",
                                    courseScheduleStart: 62,
                                    courseScheduleEnd: 65,
                                    courseCapacity: 35
                                },
                                {
                                    courseID: "@CmUObAiFKp2Z1ywsbadgqyzmwVERXHamNSekm_Mstg=",
                                    courseLecture: "Eko Prayetno, Holanda Arief Kusuma, Septia Refly",
                                    courseLectureID: 7898777102,
                                    courseRoom: "Ruang 4 FT",
                                    courseRoomID: 1102,
                                    courseSchedule: "Selasa, 13.20-15.50 WIB",
                                    courseScheduleStart: 62,
                                    courseScheduleEnd: 65,
                                    courseCapacity: 35
                                },
                                {
                                    courseID: "QXBoXVQ5TpEnWhB5XIwkBLjmNAzYzSP6YI6NyXZgkCk=",
                                    courseLecture: "Eko Prayetno, Holanda Arief Kusuma",
                                    courseLectureID: 7898777102,
                                    courseRoom: "Ruang 8 FT",
                                    courseRoomID: 1102,
                                    courseSchedule: "Kamis, 10.00-12.30 WIB",
                                    courseScheduleStart: 62,
                                    courseScheduleEnd: 65,
                                    courseCapacity: 35
                                }
                            ]
                        },
                        {
                            courseCode: "FST12003",
                            courseTitle: "Masyarakat Cerdas",
                            courseCredits: 3,
                            courseDepartment: "Teknik Informatika",
                            courseDepartmentID: "002",
                            session: [
                                {
                                    courseID: "Lbc0EASgTY7jxAiAsYVwUJW40SWKjo53cMEkMl8wqQk=",
                                    courseLecture: "DENY NUSYIRWAN, Eko Prayetno",
                                    courseLectureID: 7898777101,
                                    courseRoom: "Ruang 3 FT",
                                    courseRoomID: 1106,
                                    courseSchedule: "Kamis, 10.00-12.30 WIB",
                                    courseScheduleStart: 12,
                                    courseScheduleEnd: 15,
                                    courseCapacity: 35
                                }
                            ]
                        },
                        {
                            courseCode: "UNV12008",
                            courseTitle: "Kukerta",
                            courseCredits: 3,
                            courseDepartment: "Teknik Informatika",
                            courseDepartmentID: "002",
                            session: [
                                {
                                    courseID: "h3f39_BX1nee9zYxJjpbATb@kg76TjTvlx0IBGDbC@0=",
                                    courseLecture: "Muhamad Radzi Rathomi",
                                    courseLectureID: 7898777101,
                                    courseRoom: "Ruang 2 FT",
                                    courseRoomID: 1106,
                                    courseSchedule: "Sabtu, 07.30 WIB",
                                    courseScheduleStart: 12,
                                    courseScheduleEnd: 15,
                                    courseCapacity: 35
                                }
                            ]
                        },
                        {
                            courseCode: "UNV12009",
                            courseTitle: "Skripsi",
                            courseCredits: 6,
                            courseDepartment: "Teknik Informatika",
                            courseDepartmentID: "002",
                            session: [
                                {
                                    courseID: "sD61Nlgu9G5wp41hJejr47qlmtL9OSgUPnR8FDC_HD4=",
                                    courseLecture: "Muhamad Radzi Rathomi",
                                    courseLectureID: 7898777101,
                                    courseRoom: "Ruang 2 FT",
                                    courseRoomID: 1106,
                                    courseSchedule: "Sabtu, 13.00 WIB",
                                    courseScheduleStart: 12,
                                    courseScheduleEnd: 15,
                                    courseCapacity: 35
                                }
                            ]
                        },
                        {
                            courseCode: "UNV12002",
                            courseTitle: "Pancasila",
                            courseCredits: 2,
                            courseDepartment: "Teknik Informatika",
                            courseDepartmentID: "002",
                            session: [
                                {
                                    courseID: "iwKG4w@krqFYD5xB36u3Bzj38p7kpyNAOa6KdODoXks=",
                                    courseLecture: "Irman",
                                    courseLectureID: 7898777101,
                                    courseRoom: "Ruang 3 FT",
                                    courseRoomID: 1106,
                                    courseSchedule: "Rabu, 07.30-09.10 WIB",
                                    courseScheduleStart: 12,
                                    courseScheduleEnd: 15,
                                    courseCapacity: 45
                                },
                                {
                                    courseID: "tFtkhMXCsPHc2d0dyD2b0wxRudOgUajOvBypOtYGwxM=",
                                    courseLecture: "Irman",
                                    courseLectureID: 7898777102,
                                    courseRoom: "Ruang 3 FT",
                                    courseRoomID: 1102,
                                    courseSchedule: "Rabu, 09.10-10.50 WIB",
                                    courseScheduleStart: 62,
                                    courseScheduleEnd: 65,
                                    courseCapacity: 45
                                },
                                {
                                    courseID: "htuJWaELqtFc5mluWb5oiD3wgFU5T3X3DsyyhaqHiCE=",
                                    courseLecture: "Ryan Anggria Pratama",
                                    courseLectureID: 7898777102,
                                    courseRoom: "Ruang 3 FT",
                                    courseRoomID: 1102,
                                    courseSchedule: "Rabu, 10.50-12.30 WIB",
                                    courseScheduleStart: 62,
                                    courseScheduleEnd: 65,
                                    courseCapacity: 45
                                },
                                {
                                    courseID: "4ZyMMI0lT1Dm3L7B3vUnooc1qmR_NxDEMB@EhnThzyQ=",
                                    courseLecture: "Taufiqqurahman",
                                    courseLectureID: 7898777102,
                                    courseRoom: "Ruang 1 FT",
                                    courseRoomID: 1102,
                                    courseSchedule: "Kamis, 07.30-09.10 WIB",
                                    courseScheduleStart: 62,
                                    courseScheduleEnd: 65,
                                    courseCapacity: 45
                                },
                                {
                                    courseID: "ZEF2hVKI59uYxAkZjoEQYElMGnqUZ4yhotL@TgdjNH8=",
                                    courseLecture: "Taufiqqurahman",
                                    courseLectureID: 7898777102,
                                    courseRoom: "Ruang 1 FT",
                                    courseRoomID: 1102,
                                    courseSchedule: "Kamis, 09.10-10.50 WIB",
                                    courseScheduleStart: 62,
                                    courseScheduleEnd: 65,
                                    courseCapacity: 45
                                },
                                {
                                    courseID: "1KYv9GhyDx6RtCnzYYT7TLinfcAx5bZ7gFpaQ@7pmP4=",
                                    courseLecture: "Taufiqqurahman",
                                    courseLectureID: 7898777102,
                                    courseRoom: "Ruang 1 FT",
                                    courseRoomID: 1102,
                                    courseSchedule: "Kamis, 10.50-12.30 WIB",
                                    courseScheduleStart: 62,
                                    courseScheduleEnd: 65,
                                    courseCapacity: 45
                                }
                            ]
                        },
                        {
                            courseCode: "INF12001",
                            courseTitle: "Kalkulus",
                            courseCredits: 4,
                            courseDepartment: "Teknik Informatika",
                            courseDepartmentID: "002",
                            session: [
                                {
                                    courseID: "wQT83@f8aVvCGVdy8zZHcv3BUTOxS6k4Nl@KgaLcWvw=",
                                    courseLecture: "MARTALELI BETTIZA",
                                    courseLectureID: 7898777101,
                                    courseRoom: "Ruang 1 FT",
                                    courseRoomID: 1106,
                                    courseSchedule: "Jumat, 07.30-10.50 WIB",
                                    courseScheduleStart: 12,
                                    courseScheduleEnd: 15,
                                    courseCapacity: 35
                                },
                                {
                                    courseID: "uvU5GCAArZrfYFuRdzSv8OnCSkvvWSocQ8T7d9lu5SM=",
                                    courseLecture: "MARTALELI BETTIZA",
                                    courseLectureID: 7898777102,
                                    courseRoom: "Ruang 6 FT",
                                    courseRoomID: 1102,
                                    courseSchedule: "Senin, 07.30-10.50 WIB",
                                    courseScheduleStart: 62,
                                    courseScheduleEnd: 65,
                                    courseCapacity: 35
                                },
                                {
                                    courseID: "FGGDUthkAlnzE0uSHtsEOY1MpkB1LDNxTc6_INWm@o0=",
                                    courseLecture: "Anton Hekso Yunianto",
                                    courseLectureID: 7898777102,
                                    courseRoom: "Ruang 2 FT",
                                    courseRoomID: 1102,
                                    courseSchedule: "Selasa, 07.30-10.50 WIB",
                                    courseScheduleStart: 62,
                                    courseScheduleEnd: 65,
                                    courseCapacity: 35
                                }
                            ]
                        },
                        {
                            courseCode: "INF11001",
                            courseTitle: "Dasar Pemrograman",
                            courseCredits: 4,
                            courseDepartment: "Teknik Informatika",
                            courseDepartmentID: "002",
                            session: [
                                {
                                    courseID: "egg6KdPgtf_JYYRl_1qeX@7IZ5PEngIpCIOkKMxkl0A=",
                                    courseLecture: "Nurfalinda",
                                    courseLectureID: 7898777101,
                                    courseRoom: "Ruang 1 FT",
                                    courseRoomID: 1106,
                                    courseSchedule: "Rabu, 13.20-16.40 WIB",
                                    courseScheduleStart: 12,
                                    courseScheduleEnd: 15,
                                    courseCapacity: 35
                                },
                                {
                                    courseID: "LkE2MdVtWxVQgKE43RwoiFsxnubtuEqd@Gh4JWapiiM=",
                                    courseLecture: "Alena Uperiati",
                                    courseLectureID: 7898777102,
                                    courseRoom: "Ruang 2 FT",
                                    courseRoomID: 1102,
                                    courseSchedule: "Selasa, 10.50-14.10 WIB",
                                    courseScheduleStart: 62,
                                    courseScheduleEnd: 65,
                                    courseCapacity: 35
                                },
                                {
                                    courseID: "Lhuhdwiqhdowqhodhqoi92u890e2e9d2PJDPQ",
                                    courseLecture: "Nurfalinda",
                                    courseLectureID: 7898777102,
                                    courseRoom: "Ruang 2 FT",
                                    courseRoomID: 1102,
                                    courseSchedule: "Jumat, 13.20-16.40 WIB",
                                    courseScheduleStart: 62,
                                    courseScheduleEnd: 65,
                                    courseCapacity: 35
                                }
                            ]
                        },
                        {
                            courseCode: "INF11002",
                            courseTitle: "Organisasi dan Arsitektur Komputer",
                            courseCredits: 3,
                            courseDepartment: "Teknik Informatika",
                            courseDepartmentID: "002",
                            session: [
                                {
                                    courseID: "fF_uGyqqTaOr2YKccsmxHVh3P_HKqMB8m1CHWS3TM1Q=",
                                    courseLecture: "Ferdi Chahyadi",
                                    courseLectureID: 7898777101,
                                    courseRoom: "Ruang 1 FT",
                                    courseRoomID: 1106,
                                    courseSchedule: "Senin, 14.10-16.40 WIB",
                                    courseScheduleStart: 12,
                                    courseScheduleEnd: 15,
                                    courseCapacity: 35
                                },
                                {
                                    courseID: "RYi3hJzsflDQIUWXFwIkx7txko9jHQLMjacZejk@j1g=",
                                    courseLecture: "Ferdi Chahyadi",
                                    courseLectureID: 7898777102,
                                    courseRoom: "Ruang 6 FT",
                                    courseRoomID: 1102,
                                    courseSchedule: "Jumat, 13.20-15.50 WIB",
                                    courseScheduleStart: 62,
                                    courseScheduleEnd: 65,
                                    courseCapacity: 35
                                },
                                {
                                    courseID: "1XcTfI3z5ocbLrX2X6Ed8gNtH5n7Tnkvs3HlB3JJ3X4='",
                                    courseLecture: "Ferdi Chahyadi",
                                    courseLectureID: 7898777102,
                                    courseRoom: "Ruang 2 FT",
                                    courseRoomID: 1102,
                                    courseSchedule: "Rabu, 07.30-10.00 WIB",
                                    courseScheduleStart: 62,
                                    courseScheduleEnd: 65,
                                    courseCapacity: 35
                                }
                            ]
                        },
                        {
                            courseCode: "INF11006",
                            courseTitle: "Sistem Operasi",
                            courseCredits: 4,
                            courseDepartment: "Teknik Informatika",
                            courseDepartmentID: "002",
                            session: [
                                {
                                    courseID: "w8yWzWITrR3tNEibQIwdU1DZCnFx2pvOkE3io6FgqCg=",
                                    courseLecture: "Ferdi Chahyadi, Muhamad Radzi Rathomi",
                                    courseLectureID: 7898777101,
                                    courseRoom: "Ruang 1 FT",
                                    courseRoomID: 1106,
                                    courseSchedule: "Senin, 07.30-10.50 WIB",
                                    courseScheduleStart: 12,
                                    courseScheduleEnd: 15,
                                    courseCapacity: 35
                                },
                                {
                                    courseID: "TtGvxSYCdEOFBi@ckzqCPtR3TP7bL4qvs4AEC3kjp4o=",
                                    courseLecture: "Ferdi Chahyadi",
                                    courseLectureID: 7898777102,
                                    courseRoom: "Ruang 2 FT",
                                    courseRoomID: 1102,
                                    courseSchedule: "Kamis, 13.20-16.40 WIB",
                                    courseScheduleStart: 62,
                                    courseScheduleEnd: 65,
                                    courseCapacity: 35
                                }
                            ]
                        },
                        {
                            courseCode: "INF12002",
                            courseTitle: "Aljabar Linear",
                            courseCredits: 3,
                            courseDepartment: "Teknik Informatika",
                            courseDepartmentID: "002",
                            session: [
                                {
                                    courseID: "AWFxPhlIKya3Q3KTrkR@AA@4NnWpeufCIUL7SChwM8c=",
                                    courseLecture: "MARTALELI BETTIZA",
                                    courseLectureID: 7898777101,
                                    courseRoom: "Ruang 1 FT",
                                    courseRoomID: 1106,
                                    courseSchedule: "Rabu, 10.50-13.20 WIB",
                                    courseScheduleStart: 12,
                                    courseScheduleEnd: 15,
                                    courseCapacity: 35
                                },
                                {
                                    courseID: "ziLD4qnLaqXNaYpTtpZaiqg_XoqAHeLo6gFG0D11buE=",
                                    courseLecture: "MARTALELI BETTIZA",
                                    courseLectureID: 7898777102,
                                    courseRoom: "Ruang 6 FT",
                                    courseRoomID: 1102,
                                    courseSchedule: "Kamis, 09.10-11.40 WIB",
                                    courseScheduleStart: 62,
                                    courseScheduleEnd: 65,
                                    courseCapacity: 35
                                }
                            ]
                        },
                        {
                            courseCode: "INF11007",
                            courseTitle: "Struktur Data",
                            courseCredits: 4,
                            courseDepartment: "Teknik Informatika",
                            courseDepartmentID: "002",
                            session: [
                                {
                                    courseID: "cAF5IiXaD_QhFLrdZKUvgZkTdzibTq1WT9shiFofT6o=",
                                    courseLecture: "TEKAD MATULATAN",
                                    courseLectureID: 7898777101,
                                    courseRoom: "Ruang 6 FT",
                                    courseRoomID: 1106,
                                    courseSchedule: "Senin, 14.10-17.30 WIB",
                                    courseScheduleStart: 12,
                                    courseScheduleEnd: 15,
                                    courseCapacity: 35
                                },
                                {
                                    courseID: "uUM@8tK0_t_7j5UwAhQVm7avgMEIAZt9HXSIJrst9hw='",
                                    courseLecture: "TEKAD MATULATAN",
                                    courseLectureID: 7898777102,
                                    courseRoom: "Ruang 6 FT",
                                    courseRoomID: 1102,
                                    courseSchedule: "Selasa, 07.30-10.50 WIB",
                                    courseScheduleStart: 62,
                                    courseScheduleEnd: 65,
                                    courseCapacity: 35
                                }
                            ]
                        },
                        {
                            courseCode: "INF11008",
                            courseTitle: "Analisis dan Perancangan Perangkat Lunak",
                            courseCredits: 2,
                            courseDepartment: "Teknik Informatika",
                            courseDepartmentID: "002",
                            session: [
                                {
                                    courseID: "sRZAABlfJUVclhKmOF4FSiEonXN9pPVyzk9ao5oSpqo=",
                                    courseLecture: "Nurul Hayaty",
                                    courseLectureID: 7898777101,
                                    courseRoom: "Ruang 6 FT",
                                    courseRoomID: 1106,
                                    courseSchedule: "Rabu, 07.30-09.10 WIB",
                                    courseScheduleStart: 12,
                                    courseScheduleEnd: 15,
                                    courseCapacity: 35
                                },
                                {
                                    courseID: "mRqy1ND2gnst7VrsWrcleMGsORZZgvSmo@rdJVu4skw=",
                                    courseLecture: "Nurul Hayaty",
                                    courseLectureID: 7898777102,
                                    courseRoom: "Ruang 1 FT",
                                    courseRoomID: 1102,
                                    courseSchedule: "Selasa, 13.20-15.00 WIB",
                                    courseScheduleStart: 62,
                                    courseScheduleEnd: 65,
                                    courseCapacity: 35
                                }
                            ]
                        },
                        {
                            courseCode: "INF12003",
                            courseTitle: "Teori Bahasa Formal dan Otomata",
                            courseCredits: 3,
                            courseDepartment: "Teknik Informatika",
                            courseDepartmentID: "002",
                            session: [
                                {
                                    courseID: "wkjXWg_7qF5Xc2TwzCzX9jP6pbQts3C2s8z4_lTxoxI=",
                                    courseLecture: "Nurul Hayaty",
                                    courseLectureID: 7898777101,
                                    courseRoom: "Ruang 1 FT",
                                    courseRoomID: 1106,
                                    courseSchedule: "Kamis, 11.40-14.20 WIB",
                                    courseScheduleStart: 12,
                                    courseScheduleEnd: 15,
                                    courseCapacity: 35
                                },
                                {
                                    courseID: "iEE6VskoNMqwnkrd1LrS@bekqQaZSNMIaEz@wh8YdM4=",
                                    courseLecture: "Nurul Hayaty",
                                    courseLectureID: 7898777102,
                                    courseRoom: "Ruang 1 FT",
                                    courseRoomID: 1102,
                                    courseSchedule: "Senin, 11.40-14.20 WIB",
                                    courseScheduleStart: 62,
                                    courseScheduleEnd: 65,
                                    courseCapacity: 35
                                }
                            ]
                        },
                        {
                            courseCode: "INF11009",
                            courseTitle: "Kecerdasan Buatan",
                            courseCredits: 3,
                            courseDepartment: "Teknik Informatika",
                            courseDepartmentID: "002",
                            session: [
                                {
                                    courseID: "tPo4lekhcpRodIraovjEhu_Bsi4fHXvlm9sBOGaRAUc=",
                                    courseLecture: "Nola Ritha",
                                    courseLectureID: 7898777101,
                                    courseRoom: "Ruang 1 FT",
                                    courseRoomID: 1106,
                                    courseSchedule: "Kamis, 09.10-11.40 WIB",
                                    courseScheduleStart: 12,
                                    courseScheduleEnd: 15,
                                    courseCapacity: 35
                                },
                                {
                                    courseID: "dvmpC0iUOQD2YQQuvvnB84JQluomJ6BEzYerx9Vx14M=",
                                    courseLecture: "Nola Ritha",
                                    courseLectureID: 7898777102,
                                    courseRoom: "Ruang 6 FT",
                                    courseRoomID: 1102,
                                    courseSchedule: "Senin, 09.10-11.40 WIB",
                                    courseScheduleStart: 62,
                                    courseScheduleEnd: 65,
                                    courseCapacity: 35
                                }
                            ]
                        },
                        {
                            courseCode: "INF11010",
                            courseTitle: "Etika Profesi",
                            courseCredits: 2,
                            courseDepartment: "Teknik Informatika",
                            courseDepartmentID: "002",
                            session: [
                                {
                                    courseID: "HdwemnUWkhE@IBpr_DFUau9p4NBE@W@m@4LEYfbhEH4=",
                                    courseLecture: "EKA SUSWAINI",
                                    courseLectureID: 7898777101,
                                    courseRoom: "Ruang 1 FT",
                                    courseRoomID: 1106,
                                    courseSchedule: "Jumat, 07.30-09.10 WIB",
                                    courseScheduleStart: 12,
                                    courseScheduleEnd: 15,
                                    courseCapacity: 35
                                },
                                {
                                    courseID: "5EAATMmEBisQr@DFBvSuUGy1aEj7HEoI87BIcc6PWrM=",
                                    courseLecture: "EKA SUSWAINI",
                                    courseLectureID: 7898777102,
                                    courseRoom: "Ruang 1 FT",
                                    courseRoomID: 1102,
                                    courseSchedule: "Rabu, 07.30-09.10 WIB",
                                    courseScheduleStart: 62,
                                    courseScheduleEnd: 65,
                                    courseCapacity: 35
                                }
                            ]
                        },
                        {
                            courseCode: "INF12005",
                            courseTitle: "Statistika dan Probabilitas",
                            courseCredits: 3,
                            courseDepartment: "Teknik Informatika",
                            courseDepartmentID: "002",
                            session: [
                                {
                                    courseID: "p3M6ccTDzlAL0pwOQk2SrugjNBSDXogJSzbdIpU2K7M=",
                                    courseLecture: "Susanti",
                                    courseLectureID: 7898777101,
                                    courseRoom: "Ruang 8 FT",
                                    courseRoomID: 1106,
                                    courseSchedule: "Senin, 14.10-16.40 WIB",
                                    courseScheduleStart: 12,
                                    courseScheduleEnd: 15,
                                    courseCapacity: 35
                                },
                                {
                                    courseID: "bneq3_MKzEywu0rp6Jk850I6PoWep_3iINOWbu1xqh0=",
                                    courseLecture: "Susanti",
                                    courseLectureID: 7898777102,
                                    courseRoom: "Ruang 1 FT",
                                    courseRoomID: 1102,
                                    courseSchedule: "Jumat, 13.20-15.50 WIB",
                                    courseScheduleStart: 62,
                                    courseScheduleEnd: 65,
                                    courseCapacity: 35
                                }
                            ]
                        },
                        {
                            courseCode: "INF11018",
                            courseTitle: "Interaksi Manusia dan Komputer",
                            courseCredits: 3,
                            courseDepartment: "Teknik Informatika",
                            courseDepartmentID: "002",
                            session: [
                                {
                                    courseID: "A4xUSA1_GEIEQNQFA24BHtKuj0DRZfukUM8DO7qsxY8=",
                                    courseLecture: "EKA SUSWAINI",
                                    courseLectureID: 7898777101,
                                    courseRoom: "Ruang 2 FT",
                                    courseRoomID: 1106,
                                    courseSchedule: "Selasa, 14.10-16.40 WIB",
                                    courseScheduleStart: 12,
                                    courseScheduleEnd: 15,
                                    courseCapacity: 35
                                },
                                {
                                    courseID: "fWdFE86VXUUxTbJXkUXAb2dXdr19wN6HCkpuEtAkgNM=",
                                    courseLecture: "EKA SUSWAINI",
                                    courseLectureID: 7898777102,
                                    courseRoom: "Ruang 6 FT",
                                    courseRoomID: 1102,
                                    courseSchedule: "Rabu, 13.20-15.50 WIB",
                                    courseScheduleStart: 62,
                                    courseScheduleEnd: 65,
                                    courseCapacity: 35
                                }
                            ]
                        },
                        {
                            courseCode: "INF11017",
                            courseTitle: "Pemrograman Web",
                            courseCredits: 4,
                            courseDepartment: "Teknik Informatika",
                            courseDepartmentID: "002",
                            session: [
                                {
                                    courseID: "E5X0gRqyW5oWgV6kU07urTB@EgVduGnbqek2T90ctKA=",
                                    courseLecture: "Alena Uperiati",
                                    courseLectureID: 7898777101,
                                    courseRoom: "Ruang 2 FT",
                                    courseRoomID: 1106,
                                    courseSchedule: "Kamis, 10.00-13.20 WIB",
                                    courseScheduleStart: 12,
                                    courseScheduleEnd: 15,
                                    courseCapacity: 35
                                },
                                {
                                    courseID: "0dqqrg6TjqYU2lfP4aUdApSJFFCpGVlgPMCrVNZ9jts=",
                                    courseLecture: "Alena Uperiati",
                                    courseLectureID: 7898777102,
                                    courseRoom: "Ruang 2 FT",
                                    courseRoomID: 1102,
                                    courseSchedule: "Senin, 10.50-14.10 WIB",
                                    courseScheduleStart: 62,
                                    courseScheduleEnd: 65,
                                    courseCapacity: 35
                                }
                            ]
                        },
                        {
                            courseCode: "INF11021",
                            courseTitle: "Penambangan Data",
                            courseCredits: 3,
                            courseDepartment: "Teknik Informatika",
                            courseDepartmentID: "002",
                            session: [
                                {
                                    courseID: "nZhmopjStm@T58k7772ODFRi@eaSrGkyQiFr1bvzYLM=",
                                    courseLecture: "TEKAD MATULATAN",
                                    courseLectureID: 7898777101,
                                    courseRoom: "Ruang 2 FT",
                                    courseRoomID: 1106,
                                    courseSchedule: "Jumat, 07.30-10.00 WIB",
                                    courseScheduleStart: 12,
                                    courseScheduleEnd: 15,
                                    courseCapacity: 35
                                }
                            ]
                        },
                        {
                            courseCode: "INF11022",
                            courseTitle: "Kecerdasan Komputasional",
                            courseCredits: 3,
                            courseDepartment: "Teknik Informatika",
                            courseDepartmentID: "002",
                            session: [
                                {
                                    courseID: "7s1BkTevZOCFEJAv7jNFvOE3Sb9HXeH7nyy4IFZUyfE=",
                                    courseLecture: "Nola Ritha",
                                    courseLectureID: 7898777101,
                                    courseRoom: "Ruang 8 FT",
                                    courseRoomID: 1106,
                                    courseSchedule: "Rabu, 07.30-10.00 WIB",
                                    courseScheduleStart: 12,
                                    courseScheduleEnd: 15,
                                    courseCapacity: 35
                                }
                            ]
                        },
                        {
                            courseCode: "INF11025",
                            courseTitle: "Perancangan dan Implementasi Perangkat Lunak",
                            courseCredits: 3,
                            courseDepartment: "Teknik Informatika",
                            courseDepartmentID: "002",
                            session: [
                                {
                                    courseID: "_RK6zgc5dkxGmlIfCDFSCQbS5MHku6cmMYkYvw@u_48=",
                                    courseLecture: "Nurul Hayaty",
                                    courseLectureID: 7898777101,
                                    courseRoom: "Ruang 1 FT",
                                    courseRoomID: 1106,
                                    courseSchedule: "Selasa, 07.30-10.00 WIB",
                                    courseScheduleStart: 12,
                                    courseScheduleEnd: 15,
                                    courseCapacity: 35
                                }
                            ]
                        },
                        {
                            courseCode: "INF11026",
                            courseTitle: "Manajemen Basis Data",
                            courseCredits: 3,
                            courseDepartment: "Teknik Informatika",
                            courseDepartmentID: "002",
                            session: [
                                {
                                    courseID: "3tB05gghcrPpLmwXbbhxLQsXiob_YqMGbfhjvN9OlWI=",
                                    courseLecture: "TEKAD MATULATAN",
                                    courseLectureID: 7898777101,
                                    courseRoom: "Ruang 1 FT",
                                    courseRoomID: 1106,
                                    courseSchedule: "Kamis, 14.10-16.40 WIB",
                                    courseScheduleStart: 12,
                                    courseScheduleEnd: 15,
                                    courseCapacity: 35
                                }
                            ]
                        },
                        {
                            courseCode: "INF11027",
                            courseTitle: "Pengujian dan Penjaminan Mutu Perangkat Lunak",
                            courseCredits: 3,
                            courseDepartment: "Teknik Informatika",
                            courseDepartmentID: "002",
                            session: [
                                {
                                    courseID: "F7ffOQjxWa6fN5y0VjYRaQXlN3QBLMIeWuQl4F88kbc=",
                                    courseLecture: "Nola Ritha",
                                    courseLectureID: 7898777101,
                                    courseRoom: "Ruang 2 FT",
                                    courseRoomID: 1106,
                                    courseSchedule: "Selasa, 13.20-15.50 WIB",
                                    courseScheduleStart: 12,
                                    courseScheduleEnd: 15,
                                    courseCapacity: 35
                                },
                                {
                                    courseID: "hQRw5ZObBM6GN34c61wReYXDTzqj4Ls4GXBPg5VPQRI=",
                                    courseLecture: "Nola Ritha",
                                    courseLectureID: 7898777102,
                                    courseRoom: "Ruang 6 FT",
                                    courseRoomID: 1102,
                                    courseSchedule: "Selasa, 10.00-12.30 WIB",
                                    courseScheduleStart: 62,
                                    courseScheduleEnd: 65,
                                    courseCapacity: 35
                                }
                            ]
                        },
                        {
                            courseCode: "INF11030",
                            courseTitle: "Jaringan Nirkabel",
                            courseCredits: 3,
                            courseDepartment: "Teknik Informatika",
                            courseDepartmentID: "002",
                            session: [
                                {
                                    courseID: "ujS9sEasSyqW@R2IG3ykG5hO4HKjJUI7unoM6ncvLfQ=",
                                    courseLecture: "Muhamad Radzi Rathomi",
                                    courseLectureID: 7898777101,
                                    courseRoom: "Ruang 6 FT",
                                    courseRoomID: 1106,
                                    courseSchedule: "Kamis, 14.10-16.40 WIB",
                                    courseScheduleStart: 12,
                                    courseScheduleEnd: 15,
                                    courseCapacity: 35
                                }
                            ]
                        },
                        {
                            courseCode: "INF11031",
                            courseTitle: "Sistem Terdistribusi",
                            courseCredits: 3,
                            courseDepartment: "Teknik Informatika",
                            courseDepartmentID: "002",
                            session: [
                                {
                                    courseID: "Y3iIBFWHHurBO62arCdKGnmAJBfEnxX8pgjqgNB5Yr0=",
                                    courseLecture: "Muhamad Radzi Rathomi",
                                    courseLectureID: 7898777101,
                                    courseRoom: "Ruang 1 FT",
                                    courseRoomID: 1106,
                                    courseSchedule: "Selasa, 14.10-16.40 WIB",
                                    courseScheduleStart: 12,
                                    courseScheduleEnd: 15,
                                    courseCapacity: 35
                                }
                            ]
                        },
                        {
                            courseCode: "INF11032",
                            courseTitle: "Pemrograman Jaringan",
                            courseCredits: 3,
                            courseDepartment: "Teknik Informatika",
                            courseDepartmentID: "002",
                            session: [
                                {
                                    courseID: "3pBfspUjngkV_pZl96GBh7hrt2GacIrId5f4N6X6hfA=",
                                    courseLecture: "Muhamad Radzi Rathomi",
                                    courseLectureID: 7898777101,
                                    courseRoom: "Ruang 8 FT",
                                    courseRoomID: 1106,
                                    courseSchedule: "Rabu, 10.00-12.30 WIB",
                                    courseScheduleStart: 12,
                                    courseScheduleEnd: 15,
                                    courseCapacity: 35
                                }
                            ]
                        },
                        {
                            courseCode: "INF12008",
                            courseTitle: "Kerja Praktik",
                            courseCredits: 3,
                            courseDepartment: "Teknik Informatika",
                            courseDepartmentID: "002",
                            session: [
                                {
                                    courseID: "fiOCGULON5VJdomKr281aJebdKrrc7QjA_41AZgqD5I=",
                                    courseLecture: "Nurfalinda",
                                    courseLectureID: 7898777101,
                                    courseRoom: "Ruang 1 FT",
                                    courseRoomID: 1106,
                                    courseSchedule: "Sabtu, 10.00 WIB",
                                    courseScheduleStart: 12,
                                    courseScheduleEnd: 15,
                                    courseCapacity: 35
                                }
                            ]
                        },
                        {
                            courseCode: "INF11020",
                            courseTitle: "Data Sains",
                            courseCredits: 3,
                            courseDepartment: "Teknik Informatika",
                            courseDepartmentID: "002",
                            session: [
                                {
                                    courseID: "jDyhQK0_is38LEzFnSXIli2zoK8HK3QY42MBYP42CGE=",
                                    courseLecture: "Nurfalinda, Agus Salim",
                                    courseLectureID: 7898777101,
                                    courseRoom: "Ruang 8 FT",
                                    courseRoomID: 1106,
                                    courseSchedule: "Selasa, 13.20-15.50 WIB",
                                    courseScheduleStart: 12,
                                    courseScheduleEnd: 15,
                                    courseCapacity: 35
                                }
                            ]
                        },
                        {
                            courseCode: "INF11016",
                            courseTitle: "Analisis dan Desain Berorientasi Objek",
                            courseCredits: 2,
                            courseDepartment: "Teknik Informatika",
                            courseDepartmentID: "002",
                            session: [
                                {
                                    courseID: "k0nYdsUf9ZjKzT5zY7Hai9iAbpRXsqFs40j_L56xASQ=",
                                    courseLecture: "Muhamad Radzi Rathomi, Alena Uperiati",
                                    courseLectureID: 7898777101,
                                    courseRoom: "Ruang 3 FT",
                                    courseRoomID: 1106,
                                    courseSchedule: "Kamis, 07.30-09.10 WIB",
                                    courseScheduleStart: 12,
                                    courseScheduleEnd: 15,
                                    courseCapacity: 35
                                }
                            ]
                        },
                        {
                            courseCode: "INF12007",
                            courseTitle: "Metodologi Penelitian",
                            courseCredits: 2,
                            courseDepartment: "Teknik Informatika",
                            courseDepartmentID: "002",
                            session: [
                                {
                                    courseID: "Jr0HIe3FnyXiJ@JpCWVGOB7tR90Zigulu199GiaJQ3Q=",
                                    courseLecture: "EKA SUSWAINI",
                                    courseLectureID: 7898777101,
                                    courseRoom: "Ruang 2 FT",
                                    courseRoomID: 1106,
                                    courseSchedule: "Jumat, 10.00-11.40 WIB",
                                    courseScheduleStart: 12,
                                    courseScheduleEnd: 15,
                                    courseCapacity: 35
                                },
                                {
                                    courseID: "INYFjRUTuCVGp9PD8yKU8ro8mG4uemMpV7uAjYaUs74=",
                                    courseLecture: "EKA SUSWAINI",
                                    courseLectureID: 7898777102,
                                    courseRoom: "Ruang 6 FT",
                                    courseRoomID: 1102,
                                    courseSchedule: "Senin, 07.30-09.10 WIB",
                                    courseScheduleStart: 62,
                                    courseScheduleEnd: 65,
                                    courseCapacity: 35
                                }
                            ]
                        }
                    ],
                    dataReady: true
                });
            });
    }

    searchCourse = (e) => {
        this.setState({ query: e.target.value })
    }

    handleClickDetail() {
        alert("Terapkan");
    }

    handleClickSubmit() {
        localStorage.setItem('lirs_status', true);
        localStorage.setItem('course_picked', JSON.stringify(this.state.coursePick))
        window.location.href = "/dashboard";
    }

    handleAddSKS = (sksPerStudy, courseID, courseCode, courseTitle, courseLecture, courseRoom, courseSchedule) => {
        this.setState({ sksCount: this.state.sksCount + sksPerStudy })

        if (sksPerStudy != 0) {
            //adding new data
            this.state.coursePick.push({
                courseID: courseID,
                courseCode: courseCode,
                courseTitle: courseTitle,
                courseCredits: sksPerStudy,
                courseLecture: courseLecture,
                courseRoom: courseRoom,
                courseSchedule: courseSchedule,
                info: []
            })

            //updating the state value
            this.setState({ ...this.state.coursePick })
        } else if (sksPerStudy == 0) {
            let index = this.state.coursePick.findIndex(el => el.courseCode === courseCode)
            this.state.coursePick[index] = {
                ...this.state.coursePick[index],
                courseID: courseID,
                courseLecture: courseLecture,
                courseRoom: courseRoom,
                courseSchedule: courseSchedule,
            }
            this.setState({ ...this.state.coursePick })
        }

        console.table(this.state.coursePick)
    }

    handleRemoveSKS = (sksPerStudy, courseCode) => {
        this.setState({ sksCount: this.state.sksCount - sksPerStudy })

        let index = this.state.coursePick.findIndex(el => el.courseCode === courseCode)
        this.state.coursePick.splice(index, 1)
        this.setState({ ...this.state.coursePick })

        console.table(this.state.coursePick)
    }

    setOpenModal() {
        this.setState({ modal: true })
    }

    setCloseModal() {
        this.setState({ modal: false })
    }

    render() {

        const coursePlan = this.state.coursePlan;

        const token = localStorage.getItem("lms-sess-key");
        if (!token) {
            return <Redirect to="/auth/login" />;
        }

        if (this.state.dataReady === false) {
            return (
                <div className="main-content-plan">
                    <section className="section">
                        <div className="section-header">
                            {/* <div className="bg-primary rounded wrapper-icon-page-title">
                                <span
                                    className="iconify icon-page-title"
                                    data-icon="uil:postcard"
                                    data-inline="false"
                                ></span>
                            </div> */}
                            <h1>Isian Rencana Studi</h1>
                            {/* <div class="section-header-breadcrumb">
                            <div class="breadcrumb-item">Info Terdahulu</div>
                        </div> */}
                        </div>

                        <div className="section-body">

                            <div className="row">
                                <div className="col-md-8">
                                    <h6 style={{ marginBottom: "20px" }}>
                                        Matakuliah Semester Ini
                                    </h6>
                                </div>
                                <div className="col-md-4">
                                    <table
                                        style={{
                                            width: "100%",
                                            marginBottom: "20px"
                                        }}
                                    >
                                        <tbody>
                                            <tr>
                                                <td
                                                    style={{
                                                        textAlign: "center",
                                                        background: "white",
                                                        fontWeight: "bold"
                                                    }}
                                                >
                                                    <span>Batas Kredit Semester Ini : 0</span>
                                                </td>
                                                <td
                                                    style={{
                                                        textAlign: "center",
                                                        background: "white",
                                                        fontWeight: "bold"
                                                    }}
                                                >
                                                    <span>Terambil : 0</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="row">
                                {/* mobile only */}

                                <div className="col-md-4">
                                    <div className="card" style={{ height: "470px" }}>
                                        <div className="card-body">
                                            <span style={{ fontWeight: "bold" }}>Filter</span>
                                            <div
                                                className="form-group"
                                                style={{ marginTop: "20px" }}
                                            >
                                                <label>Semester</label>
                                                <select className="custom-select">
                                                    <option defaultValue>-Pilih-</option>
                                                    <option value="Semua Semester">
                                                        Semua Semester
                                                    </option>
                                                    <option value="Semester 1">Semester 1</option>
                                                    <option value="Semester 2">Semester 2</option>
                                                    <option value="Semester 3">Semester 3</option>
                                                    <option value="Semester 4">Semester 4</option>
                                                    <option value="Semester 5">Semester 5</option>
                                                    <option value="Semester 6">Semester 6</option>
                                                    <option value="Semester 7">Semester 7</option>
                                                    <option value="Semester 8">Semester 8</option>
                                                </select>
                                            </div>
                                            {/* <div className="form-group">
                          <label>Wajib / Pilihan</label>
                          <select className="custom-select">
                            <option defaultValue>-Pilih-</option>
                            <option value="Seluruhnya">Seluruhnya</option>
                            <option value="Wajib">Wajib</option>
                            <option value="Pilihan">Pilihan</option>
                          </select>
                        </div> */}

                                        </div>

                                        <div className="card-footer">
                                            <div className="form-group">
                                                <div className="custom-control custom-checkbox">
                                                    <input
                                                        type="checkbox"
                                                        className="custom-control-input"
                                                        id="customCheck1"
                                                    />
                                                    <label
                                                        className="custom-control-label"
                                                        htmlFor="customCheck1"
                                                    >
                                                        Termasuk matakuliah yang telah dilulusi
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div
                                                    className="btn btn-outline-primary btn-lg btn-block"
                                                    onClick={() => this.handleClickDetail()}
                                                >
                                                    Terapkan
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-8">
                                    <div className="card" style={{ height: "470px" }}>
                                        <div className="card-body">
                                            <div className="d-flex justify-content-center text-primary">
                                                <div className="spinner-border" role="status">
                                                    <span className="sr-only">Loading...</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/*  */}
                            </div>
                        </div>
                    </section>
                </div>
            );
        } else {
            if (coursePlan.length === 0) {
                return (
                    <div className="main-content-plan">
                        <section className="section">
                            <div className="section-header">
                                {/* <div className="bg-primary rounded wrapper-icon-page-title">
                                    <span
                                        className="iconify icon-page-title"
                                        data-icon="uil:postcard"
                                        data-inline="false"
                                    ></span>
                                </div> */}
                                <h1>Isian Rencana Studi</h1>
                                {/* <div class="section-header-breadcrumb">
                            <div class="breadcrumb-item">Info Terdahulu</div>
                        </div> */}
                            </div>

                            <div className="section-body">

                                <div className="row">
                                    <div className="col-md-8">
                                        <h6 style={{ marginBottom: "20px" }}>
                                            Matakuliah Semester Ini
                                        </h6>
                                    </div>
                                    <div className="col-md-4">
                                        <table
                                            style={{
                                                width: "100%",
                                                marginBottom: "20px"
                                            }}
                                        >
                                            <tbody>
                                                <tr>
                                                    <td
                                                        style={{
                                                            textAlign: "center",
                                                            background: "white",
                                                            fontWeight: "bold"
                                                        }}
                                                    >
                                                        <span>Batas Kredit Semester Ini : {this.state.sksMax}</span>
                                                    </td>
                                                    <td
                                                        style={{
                                                            textAlign: "center",
                                                            background: "white",
                                                            fontWeight: "bold"
                                                        }}
                                                    >
                                                        <span>Terambil : {this.state.sksCount}</span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div className="row">
                                    {/* mobile only */}

                                    <div className="col-md-4">
                                        <div className="card" style={{ height: "470px" }}>
                                            <div className="card-body">
                                                <span style={{ fontWeight: "bold" }}>Filter</span>
                                                <div
                                                    className="form-group"
                                                    style={{ marginTop: "20px" }}
                                                >
                                                    <label>Semester</label>
                                                    <select className="custom-select">
                                                        <option defaultValue>-Pilih-</option>
                                                        <option value="Semua Semester">
                                                            Semua Semester
                                                        </option>
                                                        <option value="Semester 1">Semester 1</option>
                                                        <option value="Semester 2">Semester 2</option>
                                                        <option value="Semester 3">Semester 3</option>
                                                        <option value="Semester 4">Semester 4</option>
                                                        <option value="Semester 5">Semester 5</option>
                                                        <option value="Semester 6">Semester 6</option>
                                                        <option value="Semester 7">Semester 7</option>
                                                        <option value="Semester 8">Semester 8</option>
                                                    </select>
                                                </div>
                                                {/* <div className="form-group">
                          <label>Wajib / Pilihan</label>
                          <select className="custom-select">
                            <option defaultValue>-Pilih-</option>
                            <option value="Seluruhnya">Seluruhnya</option>
                            <option value="Wajib">Wajib</option>
                            <option value="Pilihan">Pilihan</option>
                          </select>
                        </div> */}

                                            </div>

                                            <div className="card-footer">
                                                <div className="form-group">
                                                    <div className="custom-control custom-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            className="custom-control-input"
                                                            id="customCheck1"
                                                        />
                                                        <label
                                                            className="custom-control-label"
                                                            htmlFor="customCheck1"
                                                        >
                                                            Termasuk matakuliah yang telah dilulusi
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div
                                                        className="btn btn-outline-primary btn-lg btn-block"
                                                        onClick={() => this.handleClickDetail()}
                                                    >
                                                        Terapkan
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-8">
                                        <div className="card" style={{ height: "470px" }}>
                                            <div className="card-body">
                                                <h6 className="text-center mt-4">
                                                    Data Jadwal Matakuliah Belum Tersedia.
                                                </h6>
                                            </div>
                                        </div>
                                    </div>

                                    {/*  */}
                                </div>
                            </div>
                        </section>
                    </div>
                );
            } else {
                return (
                    <div className="main-content-plan">
                        <section className="section">
                            <div className="section-header">
                                {/* <div className="bg-primary rounded wrapper-icon-page-title">
                                    <span
                                        className="iconify icon-page-title"
                                        data-icon="uil:postcard"
                                        data-inline="false"
                                    ></span>
                                </div> */}
                                <h1>Isian Rencana Studi</h1>
                                {/* <div class="section-header-breadcrumb">
                            <div class="breadcrumb-item">Info Terdahulu</div>
                        </div> */}
                            </div>

                            <div className="section-body">

                                <div className="row">
                                    <div className="col-md-8">
                                        <h6 style={{ marginBottom: "20px" }}>
                                            Matakuliah Semester Ini
                                        </h6>
                                    </div>
                                    <div className="col-md-4">
                                        <table
                                            style={{
                                                width: "100%",
                                                marginBottom: "20px"
                                            }}
                                        >
                                            <tbody>
                                                <tr>
                                                    <td
                                                        style={{
                                                            textAlign: "center",
                                                            background: "white",
                                                            fontWeight: "bold"
                                                        }}
                                                    >
                                                        <span>Batas Kredit Semester Ini : {this.state.sksMax}</span>
                                                    </td>
                                                    <td
                                                        style={{
                                                            textAlign: "center",
                                                            background: "white",
                                                            fontWeight: "bold"
                                                        }}
                                                    >
                                                        <span>Terambil : {this.state.sksCount}</span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div className="row">
                                    {/* mobile only */}

                                    <div className="col-md-4">
                                        <div className="card" style={{ height: "470px" }}>
                                            <div className="card-body">
                                                <span style={{ fontWeight: "bold" }}>Filter</span>
                                                <div
                                                    className="form-group"
                                                    style={{ marginTop: "20px" }}
                                                >
                                                    <label>Semester</label>
                                                    <select className="custom-select">
                                                        <option defaultValue>-Pilih-</option>
                                                        <option value="Semua Semester">
                                                            Semua Semester
                                                        </option>
                                                        <option value="Semester 1">Semester 1</option>
                                                        <option value="Semester 2">Semester 2</option>
                                                        <option value="Semester 3">Semester 3</option>
                                                        <option value="Semester 4">Semester 4</option>
                                                        <option value="Semester 5">Semester 5</option>
                                                        <option value="Semester 6">Semester 6</option>
                                                        <option value="Semester 7">Semester 7</option>
                                                        <option value="Semester 8">Semester 8</option>
                                                    </select>
                                                </div>
                                                {/* <div className="form-group">
                          <label>Wajib / Pilihan</label>
                          <select className="custom-select">
                            <option defaultValue>-Pilih-</option>
                            <option value="Seluruhnya">Seluruhnya</option>
                            <option value="Wajib">Wajib</option>
                            <option value="Pilihan">Pilihan</option>
                          </select>
                        </div> */}

                                            </div>

                                            <div className="card-footer">
                                                <div className="form-group">
                                                    <div className="custom-control custom-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            className="custom-control-input"
                                                            id="customCheck1"
                                                        />
                                                        <label
                                                            className="custom-control-label"
                                                            htmlFor="customCheck1"
                                                        >
                                                            Termasuk matakuliah yang telah dilulusi
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div
                                                        className="btn btn-outline-primary btn-lg btn-block"
                                                        onClick={() => this.handleClickDetail()}
                                                    >
                                                        Terapkan
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-8">
                                        <div className="card" style={{ height: '470px' }}>
                                            <div className="card-header">
                                                <h4>Semester 3, Teknik Informatika</h4>
                                                <div className="card-header-form">
                                                    <input
                                                        type="text"
                                                        name="search"
                                                        className="form-control card-header-form"
                                                        value={this.state.query}
                                                        onChange={this.searchCourse}
                                                        placeholder="Cari Mata Kuliah"
                                                    />
                                                </div>
                                            </div>
                                            {/* <StudyPlanContainer coursePlans={this.dynamicSearch()} /> */}
                                            {/* <div className="card-body" style={{ overflowY: 'scroll', marginTop: '20px 0px 20px 0px' }}>
                                                {coursePlan.map(plan => {
                                                    return (
                                                        <StudyPlanList key={plan.courseCode} data={plan} addSKS={this.handleAddSKS} removeSKS={this.handleRemoveSKS}
                                                            maxSKS={this.state.sksMax} countSKS={this.state.sksCount} />
                                                    );
                                                })}
                                            </div> */}

                                            <div className="card-body" style={{ overflowY: 'scroll', marginTop: '20px 0px 20px 0px' }}>
                                                {coursePlan?.filter((dt) =>
                                                    dt.courseTitle.toLowerCase().includes(this.state.query.toLowerCase())
                                                )
                                                    .map(plan => {
                                                        return (
                                                            <StudyPlanList key={plan.courseCode} data={plan} addSKS={this.handleAddSKS} removeSKS={this.handleRemoveSKS}
                                                                maxSKS={this.state.sksMax} countSKS={this.state.sksCount} />
                                                        );
                                                    })}
                                            </div>

                                            <div style={{ borderRadius: '0 0 10px 10px', borderTop: 'none', padding: '0.75rem 1.25rem' }}>
                                                <div className="form-group">
                                                    <div
                                                        className="btn btn-primary btn-lg btn-block"
                                                        onClick={() => this.setOpenModal()}
                                                    >
                                                        Ajukan
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/*  */}
                                </div>
                            </div>
                        </section>

                        <CModal
                            show={this.state.modal}
                            onClose={() => this.setCloseModal()}
                        >
                            <CModalHeader closeButton>
                                <CModalTitle>Ajukan Rencana Studi</CModalTitle>
                            </CModalHeader>
                            <CModalBody>
                                Apakah Kamu Sudah Yakin Dengan Rencana Studi yang
                                Diajukan?
                            </CModalBody>
                            <CModalFooter>
                                <CButton
                                    color="primary"
                                    onClick={() => this.handleClickSubmit()}>Simpan</CButton>{' '}
                                <CButton
                                    color="secondary"
                                    onClick={() => this.setCloseModal()}
                                >Batal</CButton>
                            </CModalFooter>
                        </CModal>

                    </div >
                );
            }
        }
    }
}

export default StudyPlan
