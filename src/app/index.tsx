import React, {useEffect, useState} from "react"
import Header from "./components/header";
import Table from "./components/table";
import Footer from "./components/footer";
import {Agent, AgentApiService, AgentData} from "./agents/types";
import Modal from "./components/modal";

type Props = {
    agentService: AgentApiService
}

const App: React.FC<Props> = ({agentService}) => {
    const [agents, setAgents] = useState([] as Agent[])
    const [showModal, setShowModel] = useState({} as {agent?: Agent, show: boolean})

    useEffect(() => {
        agentService.loadAll().then(setAgents)
    }, [])

    const onDelete = (agent: Agent) => {
        agentService.delete(agent)
            .then(() => agentService.loadAll())
            .then(setAgents)
    }

    const onSave = (agent: Agent | AgentData) => {
        console.log("saving", agent)
        agentService.save(agent)
            .then(() => closeModal())
            .then(() => agentService.loadAll())
            .then(setAgents)
    }

    const showCreationModal = () => {
        setShowModel({agent: null, show: true})
    }

    const showEditModal = (agent: Agent) => {
        setShowModel({agent: agent, show: true})
    }

    const closeModal = () => {
        setShowModel({agent: null, show: false})
    }

    return (
        <>
            <Header onAdd={showCreationModal} />
            <Table agents={agents} onEdit={showEditModal} onDelete={onDelete}/>
            <Modal {...showModal} onClose={closeModal} onSave={onSave}/>
            <Footer/>
        </>
    )
}

export default App