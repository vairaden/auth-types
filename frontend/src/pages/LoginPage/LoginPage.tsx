import {Button, Group, Header, Panel, PanelHeader, SimpleCell} from "@vkontakte/vkui";
import {ping} from "../../api";
import {useState} from "react";

export default function LoginPage() {
  const [pingRes, setPingRes] = useState<number>();

  async function handlePing() {
    try {

      const res = await ping();
      setPingRes(res.status);
    } catch (err: any) {
      setPingRes(0);
    }
  }

  return (
      <Panel id="main">
        <PanelHeader>VKUI</PanelHeader>
        <Group header={<Header mode="primary">Войти</Header>}>
          <SimpleCell>ping result: {pingRes}</SimpleCell>
        </Group>
        <Button onClick={handlePing}>Ping</Button>
      </Panel>
  )
}
