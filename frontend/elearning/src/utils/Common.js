import { CButton } from "@coreui/react"
import { Link } from "react-router-dom"

export const transformStatusQuizReadable = (status) => { 
    if (status) {
        return <span class="badge badge-pill badge-success">Active</span>
    } else {
        return <span class="badge badge-pill badge-danger">Inactive</span>
    }
}

export const transformStatusModuleStyle = (status) => {
    if (status) {
        return <span class="text-success">Active</span>
    } else {
        return <span class="text-danger">Inactive</span>
    }
}

export const showActionOpenQuiz = (isActive, isComplete, moduleID) => {
    if (isActive) {
        if (isComplete) {
            return "Sudah dikerjakan"
        } else {
            return <Link to={`/el/${getCourseIDActive()}/module/${moduleID}/detail`} className="btn btn-outline-primary btn-sm">Kerjakan</Link>
        }
    } else {
        return ""
    }
}

export const getCourseDataActive = () => {
    return JSON.parse(localStorage.getItem('course-data-active'))
}

export const getCourseIDActive = () => {
    return localStorage.getItem('course-id-active')
}

export const getCourseSessionIDActive = () => {
    return localStorage.getItem('course-session-id-active')
}

export const getKeyToken = () => {
    return localStorage.getItem('lms-sess-key')
}

export const generateModuleIcon = (moduleType) => {
    if (moduleType === 'material') {
        return <span className="iconify mr-2" data-icon="uil:book-alt" style={{ fontWeight: 'bold', fontSize: '18px' }}></span>
    } else if (moduleType === 'assignment') {
        return <span className="iconify mr-2" data-icon="uil:file-upload" style={{ fontWeight: 'bold', fontSize: '18px' }}></span>
    } else if (moduleType === 'quiz' || moduleType === 'exam') {
        return <span className="iconify mr-2" data-icon="uil:file-edit-alt" style={{ fontWeight: 'bold', fontSize: '18px' }}></span>
    }
}