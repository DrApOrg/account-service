import { DynamicModule, Module, Provider } from "@nestjs/common";
import { ClientProxyFactory, Transport } from "@nestjs/microservices";
import { config } from 'dotenv';
import { join } from "path";

config({
    path: join(__dirname, '../../../enviroment/dev.env')
})

@Module({})
export class TcpClientModule {
	static register(definitions: Array<{modulName: string}>): DynamicModule {
		const options = definitions.map(definition => TcpClientProvider(definition))

		return {
			module: TcpClientModule,
			providers: options,
			exports: options
		}
	}
}

const TcpClientProvider = ({modulName}): Provider => {
    return {
		provide: `${modulName}`,
		inject: [],
		useFactory: () => {
			const hostEnvKey = process.env[`TSHOP_${modulName}_HOST`]
			const portEnvKey = process.env[`TSHOP_${modulName}_TCP_PORT`]

			return ClientProxyFactory.create({
				transport: Transport.TCP,
                options: {
                    host: hostEnvKey,
                    port: Number(portEnvKey),
                }
            })
		}
    }
}